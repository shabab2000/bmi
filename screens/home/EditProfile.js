import React,{ useState, useEffect }from 'react'
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image,FlatList,Alert,TextInput,ActivityIndicator,ToastAndroid } from 'react-native'
import { FontAwesome5,FontAwesome,Ionicons,Entypo } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProgressDialog } from 'react-native-simple-dialogs';

export default function EditProfile({route,navigation}) {

    const [house,setHouse] = useState('');
    const [user, setUser] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    

    const load = async () => {
        try {
            let uid = await AsyncStorage.getItem("uid");

            if(uid!== null) {
                fetch('https://bmi1.cf/profile.php?uid='+uid)
                .then((response) => response.json())
                .then((json) => setUser(json))
                .catch((error) => console.error(error))
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handlePress = async ()=> {
     
        let uid = await AsyncStorage.getItem("uid");
        if(!user.name){
            Alert.alert('แจ้งเตือน!','กรุณากรอกชื่อ');
        }else if(!user.email){
            Alert.alert('แจ้งเตือน!','กรุณากรอกอีเมล');
        }else{
        fetch("https://bmi1.cf/editprofile.php", {
         method: "POST",
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           
           name:user.name,
           email:user.email,
           uid: uid

         }),
       })
         .then((response) => response.json())
         .then((responseJson) => {
           if (responseJson === "success") {
            console.log('success')
            ToastAndroid.show('บันทึกข้อมูลสำเร็จ', 50);
            navigation.goBack();
           } else {
            console.log(responseJson)
           }
           // Showing response message coming from server after inserting records.
           //       Alert.alert(responseJson);
           // navigation.navigate('Profile');
         })
         .catch((error) => {
           console.log(error);
         });
    }
    }
    

        useEffect(() => {
          load()
        }, [])
    return (
        <View style={styles.container}>
            
            <Text style={{textAlign:'center',fontSize:35,fontFamily:'noto'}}>
                แก้ไขข้อมูลส่วนตัว
            </Text>
            {user?
            <View style={{paddingHorizontal:30,paddingTop:20}}>
            <View style={styles.TextInput}>
                <FontAwesome name="user" size={24} color="#000" />
                    <TextInput
                placeholder='ชื่อ'
                placeholderTextColor='#ccc'
                style={{flex:1,paddingHorizontal:12,color:'#000',fontSize:16,fontFamily:'noto',}}
                //autoCorrect={true}
                //autoCapitalize={false}
                autoCompleteType='name'
                value={user.name}
                onChangeText={(txt) => setUser({...user, name: txt})}
                />
            </View>
            <View style={{paddingTop:10}}></View>
            <View style={styles.TextInput}>
                <FontAwesome name="send" size={24} color="#000" />
                    <TextInput
                placeholder='อีเมล'
                placeholderTextColor='#ccc'
                style={{flex:1,paddingHorizontal:12,color:'#000',fontSize:16,fontFamily:'noto',}}
                //autoCorrect={true}
                //autoCapitalize={false}
                autoCompleteType='email'
                keyboardType='email-address'
                textContentType='emailAddress'
                value={user.email}
                onChangeText={(txt) => setUser({...user, email: txt})}
                />
            </View>
            
            
            
            <View style={{paddingTop:10}}></View>
            
            <View>
    
                <TouchableOpacity style={{ backgroundColor: '#9932CC',borderRadius:10}}  onPress={()=>handlePress()}>
                    <Text style={styles.textRegis}>บันทึก</Text>
                </TouchableOpacity>
            </View>
            </View>
            :<ActivityIndicator size='large' color='primary' />}
        
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
        fontFamily:'noto',
        fontSize:20,
        paddingTop:7,
        paddingBottom:7,
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
