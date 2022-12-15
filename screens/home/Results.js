import { StyleSheet, Text, View,FlatList,ScrollView,Dimensions,TouchableOpacity,Alert,ToastAndroid } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
  } from 'react-native-chart-kit';
export default function Results() {
    const [data,setData] = useState([]);
    const [week,setWeek] = useState([]);
    const [datas,setDatas] = useState([]);
    
    const Bmi = async ()  => {
      let uid = await AsyncStorage.getItem("uid");
      console.log('uid '+uid)
        fetch("https://bmi1.cf/result.php?uid="+uid)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error));
      };
      const Bmis = async ()  => {
        let uid = await AsyncStorage.getItem("uid");
        console.log('uid '+uid)
          fetch("https://bmi1.cf/bmis.php?uid="+uid)
            .then((response) => response.json())
            .then((json) => setWeek(json))
            .catch((error) => console.error(error));
        };
        const Bmis1 = async ()  => {
          let uid = await AsyncStorage.getItem("uid");
          console.log('uid '+uid)
            fetch("https://bmi1.cf/data.php?uid="+uid)
              .then((response) => response.json())
              .then((json) => setDatas(json))
              .catch((error) => console.error(error));
          };

const Delete = async ()=> {
  let uid = await AsyncStorage.getItem("uid");
  Alert.alert(`ยืนยันการลบข้อมูลหรือไม่ ?`, "ข้อมูลการติดตามทั้งหมดจะลบไม่สามารถกู้คืนได้", [
    { text: "ไม่" },
    {
      text: "ยืนยัน",
      onPress: () => {
        fetch("https://bmi1.cf/delete.php", {
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
           if (responseJson === "success") {
            console.log('success')
            ToastAndroid.show('ลบข้อมูลสำเร็จ', 50);
            Bmi();Bmis();Bmis1();
           } else {
            console.log(responseJson)
           }
         })
         .catch((error) => {
           console.log(error);
         });
      }}])
}

      useEffect(() => {
        Bmi();
        Bmis();
        Bmis1();
      }, []);

      const MyLineChart = () => {
        return (
          <>
            <Text style={styles.header}>รายงานผลติดตาม</Text>
            <ScrollView horizontal={true}>
            
            <LineChart
              data={{
                labels: week?week:[0],
                datasets: [
                  {
                    data: data?data.length>0? data.length==1? [Number(data[0])]:data:[0]:[0],
                    strokeWidth: 2,
                  },
                ],
              }}
              width={500}
              height={220}
              fromZero
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
            
            </ScrollView>
          </>
        );
      };

  return (
    <View style={{flex:1}}>
    <ScrollView>
    <View style={styles.container}>
          <View>
          
            <MyLineChart />
            {/*Example of Progress Chart*/}
           
          </View>
          {/* {data.bmi ? data.bmi.map((person, index) => (
        <Text>Hello{person.bmi}</Text>
    )):null} */}
          </View>
    {/* <FlatList
                data={data.result}
                keyExtractor={(item) => item.id}
                pagingEnabled={true}
                renderItem={({ item }) => (
                    <View>
                    <Text>{item.name}</Text>
                    <Text>{item.age}</Text>
                    <Text>{item.weight}</Text>
                    <Text>{item.hight}</Text>
                    <Text>{item.bmi}</Text>
                    <Text>{item.obese}</Text>
                    <Text>{item.date}</Text>
                    <View style={{borderWidth:1}} />
                    </View>
                )} /> */}
                {data?
                <Table >
          <Row data={['สัปดาห์ที่','น้ำหนัก','ส่วนสูง','BMI','ระดับความอ้วน']} flexArr={[1, 1, 1, 1,2]} style={styles.head} textStyle={styles.text}/>
          
          
          <TableWrapper style={styles.wrapper}>
          <FlatList
              data={datas}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
            <Rows data={[[item.week_no, item.weight,item.hight,Number(item.bmi).toFixed(2),item.obese]]} flexArr={[1,1, 1, 1,2]} style={styles.row} textStyle={styles.text}/>
            )} />
          </TableWrapper>
             
        </Table>
        :<Text style={{paddingTop:15,textAlign:'center',fontFamily:'noto'}}>ยังไม่มีการบันทึกผลการติดตาม</Text>}
        {data?
        <View style={{paddingTop:50,paddingHorizontal:50}}>
            <TouchableOpacity style={{backgroundColor:"#cf70ff",padding:5,borderRadius:15}} onPress={()=> Delete()} >
                <Text style={{textAlign:"center",color:'#fff',paddingVertical:5,fontSize:18,fontFamily:'noto'}}>รีเซ็ตล้างข้อมูลใหม่</Text>
            </TouchableOpacity>
        </View>
        :null}
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 18,
        padding: 16,
        marginTop: 16,
        fontFamily:'noto'
      },
    container: { flex: 1, backgroundColor: '#fff' },
    head: { borderWidth:1  },
    wrapper: { flexDirection: 'row' },
    row: { borderBottomWidth:1,borderRightWidth:1,borderLeftWidth:1 },
    text: { textAlign: 'center',fontFamily:'noto' },
})