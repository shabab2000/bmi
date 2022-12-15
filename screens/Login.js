import React,{useState} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput, ScrollView,Alert } from 'react-native'
import { useFonts } from 'expo-font';
import { FontAwesome5,FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    AsyncStorage.setItem("uid", 1);
    const [loaded] = useFonts({
        'Kanit': require('./font/Kanit-Light.ttf'),
        'noto': require('./font/NotoSansThai-Medium.ttf'),
      });
      
      if (!loaded) {
        return null;
      }

      const handlePress = () => {
        try {
            if (!email) {
                Alert.alert('แจ้งเตือน!','กรุณากรอกอีเมล!');
            }
             else  if (!password) {
                Alert.alert('แจ้งเตือน!','กรุณากรอกรหัสผ่านใหม่!');
            } else if (password.length<6) {
                Alert.alert('แจ้งเตือน!','กรุณากรอกรหัสผ่านใหม่ 6ตัวขึ้นไป!');
            } else{
              fetch('https://bmi1.cf/login.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
       
          email: email,
       
          password: password
       
        })
       
      }).then((response) => response.json()) 
            .then((responseJson) => {
      
              if(responseJson.result === "success")
              {
                AsyncStorage.getItem('uid').then(value =>{
                  if (value == null){
                    AsyncStorage.setItem('uid',responseJson.user.id);
                    navigation.replace('HomePage');
              }else{
                    navigation.replace('HomePage');
              }
                //AsyncStorage.setItem("Email", email);
                });
              }
              else{
                Alert.alert('แจ้งเตือน!',responseJson.result);
              }
      // Showing response message coming from server after inserting records.
       //       Alert.alert(responseJson);
             // navigation.navigate('Profile');
            }).catch((error) => {
              console.log(error);
            });
              }
            } catch (err) {
              console.log(err);
          }
        }

      
      
    return (
        <View style={styles.container}>
            
            <Text style={{textAlign:'center',fontSize:40,paddingTop:50,fontFamily:'noto'}}>
                เข้าสู่ระบบ
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
            <View style={styles.TextInput}>
            <FontAwesome5 name="lock" size={24} color="#000" />
                    <TextInput
            placeholder='รหัสผ่าน'
            placeholderTextColor='#ccc'
            style={{flex:1,paddingHorizontal:12,color:'#000',fontSize:16,fontFamily:'noto'}}
            //autoCorrect={true}
            secureTextEntry={true}
            textContentType='password'
            autoCompleteType='password'
            value={password}
            onChangeText={(txt) => setPassword(txt)}
                />
            </View>
            <View style={{paddingTop:10}}></View>
            
            <View style={{alignSelf:'flex-end'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Reset')} >
        <Text style={{fontSize:16,color:'#000',fontFamily:'noto'}}>ลืมรหัสผ่าน?</Text>
      </TouchableOpacity>
      </View>
            <View style={{paddingTop:10}}>
                <TouchableOpacity style={{backgroundColor: '#9932CC',borderRadius:10}} onPress={()=> handlePress()}>
                    <Text style={styles.textRegis}>เข้าสู่ระบบ</Text>
                </TouchableOpacity>
            </View>

            {/* <View style={{paddingTop: 20, paddingBottom: 20}}>
                <Text style={{fontSize: 18,fontFamily:'Kanit',textAlign:'center'}}>หรือเข้าสู่ระบบด้วย</Text>
            </View>
            <TouchableOpacity style={styles.googleButton} onPress={() => GoogleLogin()}>
            <Image source={require('./img/google.svg')} style={{width: 20, height:20}} />
              <Text style={styles.googleButtonText}>เข้าสู่ระบบด้วย Google</Text>
            </TouchableOpacity>
      <View style={{paddingBottom:50,paddingTop:15}}>
      <TouchableOpacity style={styles.facebookButton} onPress={() => FacebookLogin()}>
            <FontAwesome5 
              name='facebook'
              size={20}
              color='#fff' 
              paddingHorizontal={3}
            />
              <Text style={styles.facebookButtonText}>เข้าสู่ระบบด้วย Facebook</Text>
            </TouchableOpacity>
            
        {/* <TouchableOpacity style={styles.iconButton}>
          <Icon name='google' type='font-awesome' size={30}  />
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.iconButton} onPress={logInFacebook}>
        
          <Icon
            name='facebook-square'
            type='font-awesome'
            size={30}
            //color='blue'
          />
          
        </TouchableOpacity> 
      </View> */}
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
