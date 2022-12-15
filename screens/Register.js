import React,{useState} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput, ScrollView,CheckBox,Alert } from 'react-native'
import { useFonts } from 'expo-font';
import { FontAwesome5,FontAwesome } from '@expo/vector-icons'; 


export default function Register({navigation}) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordSecured, setPasswordSecured] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [repasswordSecured, setRePasswordSecured] = useState(true);
    const [tel, setTel] = useState('');
    const [loading, setLoading] = useState(false);

    function isEmailValid(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase())
      }
    
    const [loaded] = useFonts({
        'Kanit': require('./font/Kanit-Light.ttf'),
        'noto': require('./font/NotoSansThai-Medium.ttf'),
      });
      
      if (!loaded) {
        return null;
      }
      

      const handlePress = async () => {
        try {
            if (!name) {
                Alert.alert('แจ้งเตือน!','กรุณากรอกชื่อ!');
            } else if (!email) {
                Alert.alert('แจ้งเตือน!','กรุณากรอกอีเมล!');
            } else if (!isEmailValid(email)) {
                Alert.alert('แจ้งเตือน!','รูปแบบอีเมลไม่ถูกต้อง!');
            } else if (!password) {
                Alert.alert('แจ้งเตือน!','กรุณากรอกรหัสผ่าน!');
            } else if (password.length<6) {
                Alert.alert('แจ้งเตือน!','กรุณากรอกรหัสผ่าน 6ตัวขึ้นไป!');
            } else if (!confirmPassword) {
                Alert.alert('แจ้งเตือน!','กรุณากรอกยืนยันรหัสผ่าน!');
            } else if (password !== confirmPassword) {
                Alert.alert('แจ้งเตือน!','กรุณายืนยันรหัสผ่านให้ตรงกัน!');
            }  else{
                fetch('https://bmi1.cf/register.php', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                   
                      email: email,
                      password: password,
                      name: name,
                   
                    })
                   
                  }).then((response) => response.json()) 
                        .then((responseJson) => {
                  
                          if(responseJson === 'สมัครสมาชิกสำเร็จ')
                          {
                            Alert.alert('แจ้งเตือน!',responseJson);
                            navigation.replace('Login');
                              //AsyncStorage.setItem("Email",email);
                          }
                          else{
                            setLoading(false);
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
                ลงทะเบียน
            </Text>
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
                //value={email}
                onChangeText={(txt) => setName(txt)}
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
                //value={email}
                onChangeText={(txt) => setEmail(txt)}
                />
            </View>
            <View style={{paddingTop:10}}></View>
            <View style={styles.TextInput}>
            <FontAwesome5 name="lock" size={24} color="#000" />
                    <TextInput
            placeholder='รหัสผ่าน'
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
                placeholder='ยืนยันรหัสผ่าน'
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
    
                <TouchableOpacity style={{ backgroundColor: '#9932CC',borderRadius:10}}  onPress={handlePress}>
                    <Text style={styles.textRegis}>ลงทะเบียน</Text>
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
