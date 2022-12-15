import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

export default function Risk({navigation}) {
  return (
    <View style={{flex:1}}>
    <ScrollView>
      <View style={{paddingHorizontal:15,paddingTop:15}}>
      <Text style={{fontFamily:'notos',paddingTop:15,fontSize:16}}>ผู้ที่เสี่ยงต่อการเป็นโรคอ้วน</Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>          1.	ผู้ที่มี BMI ระหว่าง 23.0-24.9 กิโลกรัม/ตารางเมตร คือ ผู้ที่มีน้ำหนักเกิน กลุ่มนี้เป็นกลุ่มเสี่ยงที่จะพัฒนาให้เกิดโรคเรื้อรัง เช่น โรคความดันโลหิตสูง ไขมันในเลือดสูง โรคเบาหวานชนิดที่ 2 โรคหลอดเลือดหัวใจ การปฏิบัติตัวเพื่อลดน้ำหนักที่เกิน คือ การควบคุมอาหารและออกกำลังกาย
        </Text>
        <Text style={{fontFamily:'noto'}}>          2.	ผู้ที่มี BMI {'>'} 25 กิโลกรัม/ตารางเมตร คือ ผู้ที่เป็นโรคอ้วน ร่วมกับการมีโรคเรื้อรังมากกว่า 2 โรค และมีเส้นรอบเอวมากกว่าปกติ กลุ่มนี้ควรเข้ารับการรักษาจากแพทย์ผู้ชำนาญการ ร่วมกับการควบคุมอาหารและออกกำลังกาย
        </Text>
        <Text style={{fontFamily:'notos',paddingTop:15,fontSize:16}}>ผลกระทบจากโรคอ้วน</Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>          ผู้ที่มีภาวะอ้วน จะส่งผลเสียกับร่างกาย และเพิ่มความเสี่ยงต่อการป่วยที่ทำให้เกิดโรคเรื้อรังและอาการต่างๆ ตามมา เช่น
        </Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>•	โรคหลอดเลือดหัวใจและสมอง</Text>
        <Text style={{fontFamily:'noto'}}>•	โรคความดันโลหิตสูง</Text>
        <Text style={{fontFamily:'noto'}}>•	โรคไขมันในเลือดสูง</Text>
        <Text style={{fontFamily:'noto'}}>•	โรคเบาหวาน</Text>
        <Text style={{fontFamily:'noto'}}>•	โรคไขมันเกาะตับ</Text>
        <Text style={{fontFamily:'noto'}}>•	โรคหัวใจ</Text>
        <Text style={{fontFamily:'noto'}}>•	โรคอัมพฤกษ์ อัมพาต</Text>
        <Text style={{fontFamily:'noto'}}>•	โรคมะเร็งต่างๆ</Text>
        <Text style={{fontFamily:'noto'}}>•	โรคหยุดหายใจขณะหลับ</Text>
        <Text style={{fontFamily:'noto'}}>•	ปัญหาทางระบบทางเดินหายใจ</Text>
        <Text style={{fontFamily:'noto'}}>•	ภาวะมีบุตรยาก</Text>
        <Text style={{fontFamily:'noto'}}>•	ประจำเดือนมาไม่ปกติ</Text>
        <Text style={{fontFamily:'noto'}}>•	ปวดข้อ ข้อเสื่อมก่อนวัย</Text>
        <Text style={{fontFamily:'noto'}}>•	โรคผิวหนัง เช่น สิว ขนดก ผิวหนังติดเชื้อ มีกลิ่นตัว เป็นต้น</Text>
        <Text style={{fontFamily:'notos',paddingTop:15,fontSize:16}}>การวินิจฉัยภาวะอ้วน</Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>          การตรวจหาภาวะอ้วนทำได้ด้วยการหาค่า BMI และการตรวจวัดรอบเอว เมื่อไปพบแพทย์ แพทย์จะตรวจร่างกาย ซักประวัติสุขภาพ การใช้ชีวิตประจำวัน การบริโภคอาหารและเครื่องดื่ม การสูบบุหรี่ การดื่มสุรา การใช้สารเสพติด การทำกิจกรรมต่าง ๆ ประวัติสุขภาพของครอบครัว ความรู้สึกที่มีต่อภาวะอ้วน และปัญหาที่กำลังเผชิญจากภาวะอ้วน
        </Text>
        <Text style={{fontFamily:'noto',paddingBottom:15}}>          ส่วนการตรวจเพิ่มเติมเมื่อทราบว่าผู้ป่วยกำลังเผชิญกับภาวะอ้วน ได้แก่ การตรวจวัดความดันโลหิต การตรวจหาระดับน้ำตาลและไขมันในเลือด เพื่อให้ทราบผลความผิดปกติแล้วนำไปสู่การวางแผนรักษาต่อไป
        </Text>
        </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})