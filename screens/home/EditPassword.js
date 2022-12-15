import React,{ useState, useEffect }from 'react'
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image,FlatList,Alert,TextInput,ActivityIndicator,ToastAndroid } from 'react-native'
import { FontAwesome5,FontAwesome,Ionicons,Entypo } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProgressDialog } from 'react-native-simple-dialogs';

export default function EditPassword({route,navigation}) {

    const [house,setHouse] = useState('');
    const [user, setUser] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [password,setPassword] = useState('');
    const [passwords,setPasswords] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    

    

    const handlePress = async ()=> {
     
        let uid = await AsyncStorage.getItem("uid");
        if(!password){
            Alert.alert('แจ้งเตือน!','กรุณากรอกรหัสผ่านปัจจุบัน');
        }else if(!passwords){
            Alert.alert('แจ้งเตือน!','กรุณากรอกรหัสผ่านใหม่');
        }else if(!confirmPassword){
            Alert.alert('แจ้งเตือน!','กรุณากรอกยืนยันรหัสผ่านใหม่');
        }else if(confirmPassword.length<6){
            Alert.alert('แจ้งเตือน!','กรุณากรอกรหัสผ่าน 6ตัวขึ้นไป');
        }else if(passwords!==confirmPassword){
            Alert.alert('แจ้งเตือน!','กรุณากรอกรหัสผ่านใหม่ให้ตรงกัน');
        }else{
        fetch("https://bmi1.cf/editpassword.php", {
         method: "POST",
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           
           passworda: password,
           password:passwords,
           uid: uid

         }),
       })
         .then((response) => response.json())
         .then((responseJson) => {
           if (responseJson === "success") {
            console.log('success')
            ToastAndroid.show('เปลี่ยนรหัสผ่านสำเร็จ', 50);
            navigation.goBack();
           } else {
            Alert.alert('แจ้งเตือน!',responseJson)
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
          
        }, [])
    return (
        <View style={styles.container}>
            
            <Text style={{textAlign:'center',fontSize:35,fontFamily:'noto'}}>
                เปลี่ยนรหัสผ่าน
            </Text>
            
            <View style={{paddingHorizontal:30,paddingTop:20}}>
            <View style={{paddingTop:10}}></View>
            <View style={styles.TextInput}>
            <FontAwesome5 name="lock" size={24} color="#000" />
                    <TextInput
            placeholder='รหัสผ่านปัจจุบัน'
            placeholderTextColor='#ccc'
            style={{flex:1,paddingHorizontal:12,color:'#000',fontSize:16,fontFamily:'noto',}}
            //autoCorrect={true}
            secureTextEntry={true}
            textContentType='password'
            autoCompleteType='password'

                //value={email}
            onChangeText={(txt) => setPassword(txt)}
                />
            </View>
            <View style={{paddingTop:10}}></View>
            <View style={styles.TextInput}>
            <FontAwesome5 name="lock" size={24} color="#000" />
                    <TextInput
            placeholder='รหัสผ่านใหม่'
            placeholderTextColor='#ccc'
            style={{flex:1,paddingHorizontal:12,color:'#000',fontSize:16,fontFamily:'noto',}}
            //autoCorrect={true}
            secureTextEntry={true}
            textContentType='password'
            autoCompleteType='password'

                //value={email}
            onChangeText={(txt) => setPasswords(txt)}
                />
            </View>
            <View style={{paddingTop:10}}></View>
            <View style={styles.TextInput}>
            <FontAwesome5 name="lock" size={24} color="#000" />
                    <TextInput
                placeholder='ยืนยันรหัสผ่านใหม่'
            placeholderTextColor='#ccc'
            style={{flex:1,paddingHorizontal:12,color:'#000',fontSize:16,fontFamily:'noto',}}
            //autoCorrect={true}
            secureTextEntry={true}
            textContentType='password'
            autoCompleteType='password'
                //value={email}
            onChangeText={(txt) => setConfirmPassword(txt)}
                />
            </View>
            
            
            
            <View style={{paddingTop:10}}></View>
            
            <View>
    
                <TouchableOpacity style={{ backgroundColor: '#9932CC',borderRadius:10}}  onPress={()=>handlePress()}>
                    <Text style={styles.textRegis}>บันทึก</Text>
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
