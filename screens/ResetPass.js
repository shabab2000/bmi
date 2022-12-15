import React,{useState, useEffect }from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput, ScrollView,Alert } from 'react-native'
import { useFonts } from 'expo-font';
import { FontAwesome5,FontAwesome } from '@expo/vector-icons'; 

export default function ResetPass({route,navigation}) {
    const [email, setEmail] = useState(route.params.email);
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

      const handlePress = () => {
        try {
                if (!password) {
                Alert.alert('แจ้งเตือน!','กรุณากรอกรหัสผ่านใหม่!');
            } else if (password.length<6) {
                Alert.alert('แจ้งเตือน!','กรุณากรอกรหัสผ่านใหม่ 6ตัวขึ้นไป!');
            } else if (!rePassword) {
                Alert.alert('แจ้งเตือน!','กรุณากรอกยืนยันรหัสผ่านใหม่!');
            } else if (password !== rePassword) {
                Alert.alert('แจ้งเตือน!','กรุณายืนยันรหัสผ่านใหม่ให้ตรงกัน!');
            } else{
                fetch('https://bmi1.cf/change_password.php', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                   
                      email: email,
                      password: password,
                   
                    })
                   
                  }).then((response) => response.json()) 
                        .then((responseJson) => {
                  
                          if(responseJson === 'เปลี่ยนรหัสผ่านสำเร็จ')
                          {
                            Alert.alert('แจ้งเตือน!',responseJson);
                            navigation.replace('Login');
                              //AsyncStorage.setItem("Email",email);
                              
                   
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
              }
            } catch (err) {
              console.log(err);
          }
        }
      
    return (
        <View style={styles.container}>
            
            <Text style={{textAlign:'center',fontSize:40,fontFamily:'noto'}}>
                รีเซ็ตรหัสผ่าน
            </Text>
            <View style={{paddingHorizontal:30,paddingTop:20}}>
            
            <View style={{paddingTop:10}}></View>
            <View style={styles.TextInput}>
            <FontAwesome5 name="lock" size={24} color="#000" />
                    <TextInput
            placeholder='รหัสผ่านใหม่'
            placeholderTextColor='#ccc'
            style={{flex:1,paddingHorizontal:12,color:'#000',fontSize:16,fontFamily:'noto'}}
            //autoCorrect={true}
            secureTextEntry={true}
            textContentType='password'
            autoCompleteType='password'
            value={password}
            onChangeText={(txt) => setPassword(txt)}
                //
                />
            </View>
            
            <View style={{paddingTop:10}}></View>
            <View style={styles.TextInput}>
            <FontAwesome5 name="lock" size={24} color="#000" />
                    <TextInput
            placeholder='ยืนยันรหัสผ่านใหม่'
            placeholderTextColor='#ccc'
            style={{flex:1,paddingHorizontal:12,color:'#000',fontSize:16,fontFamily:'noto'}}
            //autoCorrect={true}
            secureTextEntry={true}
            textContentType='password'
            autoCompleteType='password'
            value={rePassword}
            onChangeText={(txt) => setRePassword(txt)}
                />
            </View>
            <View style={{paddingTop:10}}></View>
            
            
            <View style={{paddingTop:10}}>
                <TouchableOpacity style={{backgroundColor: '#9932CC',borderRadius:10}} onPress={()=> handlePress()}>
                    <Text style={styles.textRegis}>รีเซ็ตรหัสผ่าน</Text>
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
