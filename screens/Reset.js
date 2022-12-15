import React,{ useState} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput, ScrollView,Alert } from 'react-native'
import { useFonts } from 'expo-font';
import { FontAwesome5,FontAwesome } from '@expo/vector-icons'; 

export default function Reset({navigation}) {
    const [email,setEmail] = useState('');


      const handlePress = async () => {
        try {
            if (!email) {
                Alert.alert('แจ้งเตือน!','กรุณากรอกอีเมล!');
              } else{
            fetch('https://bmi1.cf/reset.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
       
          email: email,
       
        })
       
      }).then((response) => response.json()) 
            .then((responseJson) => {
      
              if(responseJson === 'ส่งรหัสยืนยันในอีเมลสำเร็จ')
              {
                  //AsyncStorage.setItem("Email",email);
                  navigation.navigate('Otp',{email:email});
              }
              else{
                Alert.alert('แจ้งเตือน!',responseJson);
              }
      // Showing response message coming from server after inserting records.
       //       Alert.alert(responseJson);
             // navigation.navigate('Profile');
            }).catch((error) => {
              console.log(error);
            });

        }} catch (err) {
            console.log(err);
        }
    }
      
    return (
        <View style={styles.container}>
            
            
            <Text style={{textAlign:'center',fontSize:40,fontFamily:'noto'}}>
                ลืมรหัสผ่าน
            </Text>
            <View style={{paddingHorizontal:30,paddingTop:20}}>
            
            <View style={styles.TextInput}>
                <FontAwesome name="send" size={24} color="#000" />
                    <TextInput
                placeholder='อีเมล'
                placeholderTextColor='#ccc'
                style={{flex:1,paddingHorizontal:12,color:'#000',fontSize:16,fontFamily:'noto'}}
                //autoCorrect={true}
                //autoCapitalize={false}
                autoCompleteType='email'
                keyboardType='email-address'
                textContentType='emailAddress'
                value={email}
                onChangeText={(email) => setEmail(email)}
                />
            </View>
            
            <View style={{paddingTop:10}}></View>
            
            
            <View style={{paddingTop:10}}>
                <TouchableOpacity style={{backgroundColor: '#9932CC',borderRadius:10}} onPress={()=>handlePress()}>
                    <Text style={styles.textRegis}>ลืมรหัสผ่าน</Text>
                </TouchableOpacity>
            </View>
            </View>
     
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f8f7fd',
        justifyContent:'center'

    },
    textRegis: {
        textAlign: 'center',
        color:'#fff',
        fontSize:20,
        paddingTop:7,
        paddingBottom:7,
        fontFamily:'noto'
   
    },
    textLogin: {
        textAlign: 'center',
        color:'#FFFFFF',
        fontSize:20,
        paddingTop:7,
        paddingBottom:7,
      
    },
    TextInput: {
      width: '100%',
      height: 50,
      backgroundColor: '#fff',
      borderWidth: 2,
      borderColor: '#8A2BE2',
      borderRadius: 10,
      paddingHorizontal: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
  },
})
