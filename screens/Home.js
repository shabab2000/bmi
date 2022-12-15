import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from 'expo-font';

export default function Home({navigation}) { 
    const [loaded] = useFonts({ 
        'Kanit': require('./font/Kanit-Medium.ttf'),
        'noto': require('./font/NotoSansThai-Medium.ttf'),
        'notos': require('./font/NotoSansThai-Bold.ttf'),
      });
      
      if (!loaded) {
        return null;
      }
      
      const loads = async () => {
        try {
            let uid = await AsyncStorage.getItem('uid');
    
            if(uid!== null) {
                
                navigation.replace('HomePage');
            }
        } catch (err) {
            console.log(err);
        }
    };
    loads();
    // useEffect(() => {
    //  //load();
    // }, []);

    return (
        <View style={styles.container}>
  
            <Text style={{textAlign:'center',fontFamily:'noto',fontSize:23,paddingBottom:60,color:'blue'}}>แอปพลิเคชันควบคุมน้ำหนัก</Text>
            <View style={{alignItems:'center'}}>
                <Image source={require('./home/img/asd.png')} style={{ width:100,height:100}}  />
            </View>
            <View style={{paddingHorizontal:30,paddingTop:30}}>
            <View>
                <TouchableOpacity style={{backgroundColor: '#eeccff',borderRadius:10}} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textRegis}>ลงทะเบียน</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingTop:20,paddingBottom:5}}>
                <TouchableOpacity style={{backgroundColor: '#9932CC',borderRadius:10}} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textLogin}>เข้าสู่ระบบ</Text>
                </TouchableOpacity>
            </View>

            </View>
            <View style={{alignItems:'center',paddingTop:30}}>
            <Image source={require('./home/img/a1.png')} style={{width: '50%', height: 170}}/>
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
        color:'#000',
        fontFamily:'noto',
        fontSize:20,
        paddingTop:7,
        paddingBottom:7,
    },
    textLogin: {
        textAlign: 'center',
        fontFamily:'noto',
        color:'#FFFFFF',
        fontSize:20,
        paddingTop:7,
        paddingBottom:7,
    }
})
