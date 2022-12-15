import React,{useState} from 'react'
import { StyleSheet, Text,Alert, View,Button,TouchableOpacity,Image,TextInput, ScrollView,ToastAndroid } from 'react-native'
import RNSpeedometer from 'react-native-speedometer'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from 'expo-font';
import { ProgressDialog } from "react-native-simple-dialogs";

export default function Calculate({navigation}) {

    const[gender,setGender] = useState('');
    const[age,setAge] = useState('');
    const[weight,setWeight] = useState('');
    const[height,setHeight] = useState('');
    const[result,setResult] = useState('0');

    // const [loaded] = useFonts({
    //     'Kanit': require('../font/Kanit-Light.ttf'),
    //     'noto': require('../font/NotoSansThai-Medium.ttf'),
    //   });
      
    //   if (!loaded) {
    //     return null;
    //   }

    const res = async ()=> {
       const heights = height/100;
       const height1 = heights*heights;
       const results = weight/height1;
       setResult(results)
       let uid = await AsyncStorage.getItem("uid");
       console.log(uid);
        if(!gender){
            Alert.alert('แจ้งเตือน!','กรุณาเลือกเพศด้วย');
        }else if(!age){
            Alert.alert('แจ้งเตือน!','กรุณากรอกอายุด้วย');
        }else if(!weight){
            Alert.alert('แจ้งเตือน!','กรุณากรอกน้ำหนักด้วย');
        }else if(!height){
            Alert.alert('แจ้งเตือน!','กรุณากรอกส่วนสูงด้วย');
        }else{
       fetch("https://bmi1.cf/check.php", {
         method: "POST",
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           
           uid: uid

         }),
       })
         .then((response) => response.json())
         .then((responseJson) => {
           if (responseJson === "no") {
            Alert.alert(`บันทึกข้อมูลหรือไม่ ?`, "สัปดาห์นี้คุณยังไม่บันทึกข้อมูลอีกนะคะ", [
                { text: "ไม่" },
                {
                  text: "บันทึก",
                  onPress: () => {
            fetch("https://bmi1.cf/bmi.php", {
         method: "POST",
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           gender : gender,
           age: age,
           weight: weight,
           height:height,
           bmi: results,
           obese: results <=18.5? 'น้ำหนักน้อย':results>=23&&results<=24.99?'น้ำหนักเกิน':results>=25&&results<=29.9?'อ้วนระดับ 1':results>=40?'อ้วนระดับ 3':results>=30?'อ้วนระดับ 2':'น้ำหนักปกติ',
           uid: uid

         }),
       })
         .then((response) => response.json())
         .then((responseJson) => {
           if (responseJson === "success") {
            console.log('success')
            ToastAndroid.show('บันทึกข้อมูลสำเร็จ', 50);
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
        }}])
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

    return (
        <View style={{flex:1}}>
        <View >
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{color:'#e9218f',textAlign:'center',paddingTop:10,fontSize:25,fontFamily:'noto'}}>คำนวณ BMI</Text>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <View style={{padding:15}}>
<TouchableOpacity style={{backgroundColor: gender =='ชาย'?'#ccc':'#fff',borderRadius:20}} onPress={()=> setGender('ชาย')}>
    <Image source={require('./img/m.png')} style={{ width:100,height:100}}/>
</TouchableOpacity>
        </View>
        <View  style={{padding:15}}>
<TouchableOpacity style={{backgroundColor: gender =='หญิง'?'#ccc':'#fff',borderRadius:20}} onPress={()=> setGender('หญิง')}>
    <Image source={require('./img/w.png')} style={{ width:100,height:100}}/>
</TouchableOpacity>
        </View>
        </View>
        <View style={{paddingHorizontal:30,paddingTop:10}}>
        <View style={styles.inputView}>
        <TextInput
                    placeholder="Your Age (อายุ)"
                    keyboardType='number-pad'
                    style={{flex:1, paddingHorizontal: 12 , fontSize: 14,fontFamily:'noto'}}
                    onChangeText={(age) => setAge(age)}
                    />
        </View>
        <View style={{paddingTop:15}}/>
        <View style={styles.inputView}>
        <TextInput
                    placeholder="Your Weight in Kg (น้ำหนัก)"
                    keyboardType='number-pad'
                    value={weight}
                    style={{flex:1, paddingHorizontal: 12 , fontSize: 14,fontFamily:'noto'}}
                    onChangeText={(weight) => setWeight(weight)}
                    />
        </View>
        <View style={{paddingTop:15}}/>
        <View style={styles.inputView}>
        <TextInput
                    placeholder="Your Height in Cm (ส่วนสูง)"
                    keyboardType='number-pad'
                    value={height}
                    style={{flex:1, paddingHorizontal: 12 , fontSize: 14,fontFamily:'noto'}}
                    onChangeText={(height) => setHeight(height)}
                    />
        </View>

        <View style={{paddingTop:25}}>
            <TouchableOpacity style={{backgroundColor:"#e9218f",padding:5,borderRadius:15}} onPress={()=> res()}>
                <Text style={{textAlign:"center",color:'#fff',paddingVertical:5,fontSize:18,fontFamily:'noto'}}>คำนวณ</Text>
            </TouchableOpacity>
        </View>
        
        <View style={{paddingTop:20}}/>
        <RNSpeedometer value={result} size={200}
        minValue={0}
        maxValue={50}
        allowedDecimals={2}
            labels={[{
                name:'น้ำหนักน้อย',
                labelColor: '#7ac7cc',
                activeBarColor: '#7ac7cc',
            },{
                name:result <=18.5? 'น้ำหนักน้อย':result>=23&&result<=24.99?'น้ำหนักเกิน':result>=25&&result<=29.9?'อ้วนระดับ 1':result>=40?'อ้วนระดับ 3':result>=30?'อ้วนระดับ 2':'น้ำหนักปกติ',
                labelColor: '#14eb6e',
                activeBarColor: '#14eb6e',
            },{
                name:result <=18.5? 'น้ำหนักน้อย':result>=23&&result<=24.99?'น้ำหนักเกิน':result>=25&&result<=29.9?'อ้วนระดับ 1':result>=40?'อ้วนระดับ 3':result>=30?'อ้วนระดับ 2':'น้ำหนักปกติ',
                labelColor: '#f2cf1f',
                activeBarColor: '#f2cf1f',
            },{
                name:result <=18.5? 'น้ำหนักน้อย':result>=23&&result<=24.99?'น้ำหนักเกิน':result>=25&&result<=29.9?'อ้วนระดับ 1':result>=40?'อ้วนระดับ 3':result>=30?'อ้วนระดับ 2':'น้ำหนักปกติ',
                labelColor: '#f4ab44',
                activeBarColor: '#f4ab44',
            },{
                name:result <=18.5? 'น้ำหนักน้อย':result>=23&&result<=24.99?'น้ำหนักเกิน':result>=25&&result<=29.9?'อ้วนระดับ 1':result>=40?'อ้วนระดับ 3':result>=30?'อ้วนระดับ 2':null,
                labelColor: '#ff5400',
                activeBarColor: '#ff5400',
            },{
                name:result <=18.5? 'น้ำหนักน้อย':result>=23&&result<=24.99?'น้ำหนักเกิน':result>=25&&result<=29.9?'อ้วนระดับ 1':result>=40?'อ้วนระดับ 3':result>=30?'อ้วนระดับ 2':null,
                labelColor: '#ff2900',
                activeBarColor: '#ff2900',
            }]}
        />
        {result>=23&&result<=24.9?
        <View style={{paddingTop:80}}>
            <TouchableOpacity style={{backgroundColor:"#e9218f",padding:5,borderRadius:15}} onPress={()=> navigation.navigate('Plans',{bmi:result})}>
                <Text style={{textAlign:"center",color:'#fff',paddingVertical:5,fontSize:18,fontFamily:'noto'}}>เลือกแผนปฏิบัติ</Text>
            </TouchableOpacity>
        </View>
        :result>=25&&result<=29.9?<View style={{paddingTop:80}}>
            <TouchableOpacity style={{backgroundColor:"#e9218f",padding:5,borderRadius:15}} onPress={()=> navigation.navigate('Plans',{bmi:result})}>
                <Text style={{textAlign:"center",color:'#fff',paddingVertical:5,fontSize:18,fontFamily:'noto'}}>เลือกแผนปฏิบัติ</Text>
            </TouchableOpacity>
        </View>:result>=30?<View style={{paddingTop:80}}>
            <TouchableOpacity style={{backgroundColor:"#e9218f",padding:5,borderRadius:15}} onPress={()=> navigation.navigate('Plans',{bmi:result})}>
                <Text style={{textAlign:"center",color:'#fff',paddingVertical:5,fontSize:18,fontFamily:'noto'}}>เลือกแผนปฏิบัติ</Text>
            </TouchableOpacity>
        </View>:null}
        </View>
        <View style={{paddingBottom:100}} ></View>
        </ScrollView>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#f34ea9',
        borderRadius: 10,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
})
