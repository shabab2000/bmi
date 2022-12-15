import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Obesity({navigation}) {
  return (
    <View style={{flex:1}}>
    <ScrollView>
      <View style={{paddingHorizontal:15,paddingTop:15}}>
        <Text style={{fontFamily:'noto'}}>          โรคอ้วน หมายถึง การที่ร่างกายมีปริมาณไขมัน(Body fat)มากกว่าปกติ โดยมีการกระจายตัวของไขมันในร่างกาย (Body fat distribution)อันเป็นปัจจัยสำคัญที่มีผลร้ายต่อสุขภาพ
การวินิจฉัยโรคอ้วน
        </Text>
        <Text style={{fontFamily:'noto'}}>          น้ำหนักตัวเป็นผลรวมของมวลไขมัน (Fat mass) และมวลไร้ไขมัน (Fat-free mass) ในเชิงเคมี ไขมันคือ ไตรกลีเชอไรด์ (Triglyceride) ส่วนมวลไร้ไขมันประกอบด้วย โปรตีน น้ำ เกลือแร่และไกลโคเจน
ดัชนีมวลกาย (Body mass index) 
        </Text>
        <Text style={{fontFamily:'noto'}}>          ปัจจุบันเป็นที่ยอมรับกันทั่วโลกในทางเวชปฏิบัติ และการศึกษาในภาคสนาม ให้ใช้ดัชนี มวลกายเป็นตัวบ่งชี้ที่เหมาะสม สำหรับประเมินภาวะโภชนาการในผู้ที่มีอายุตั้งแต่ 18 ปีขึ้นไป โดย 
คำนวณจากสูตร ดัชนีมวลกาย (BMI) = น้ำหนัก (กิโลกรัม) /ส่วนสูง (เมตร) 2 
        </Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>โดยสามารถแปลผลค่า BMI ได้ดังนี้
        </Text>
        <Text style={{fontFamily:'noto',fontSize:13}}>    ค่า BMI {'<'} 18.5  แสดงถึง  อยู่ในเกณฑ์น้ำหนักน้อยหรือผอม</Text>
        <Text style={{fontFamily:'noto',fontSize:13}}>    ค่า BMI 18.5{'-'} 22.90  แสดงถึง  อยู่ในเกณฑ์ปกติ</Text>
        <Text style={{fontFamily:'noto',fontSize:13}}>    ค่า BMI 23{'-'} 24.90  แสดงถึง  น้ำหนักเกิน</Text>
        <Text style={{fontFamily:'noto',fontSize:13}}>    ค่า BMI 25{'-'} 29.90  แสดงถึง  โรคอ้วนระดับที่ 1</Text>
        <Text style={{fontFamily:'noto',fontSize:13}}>    ค่า BMI 30 ขึ้นไป  แสดงถึง  โรคอ้วนระดับที่ 2</Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>          ในกรณีที่มีค่าดัชนีมวลกายสูง และถูกวินิจฉัยว่ามีภาวะน้ำหนักเกินหรือเป็นโรคอ้วน ก็อาจทำให้เสี่ยงต่อปัญหาสุขภาพมากมาย ได้แก่ โรคความดันโลหิตสูง ระดับโคเลสเตอรอลและระดับไตรกลีเซอไรด์ในเลือดสูง โรคเบาหวานชนิดที่ 2 โรคหลอดเลือดหัวใจ โรคหลอดเลือดสมอง โรคเกี่ยวกับถุงน้ำดี โรคข้อเข่าเสื่อม ภาวะการหยุดหายใจขณะหลับหรือปัญหาในการหายใจ และโรคมะเร็งชนิดต่าง ๆ
        </Text>

        <Text style={{fontFamily:'notos',paddingTop:15,fontSize:16}}>สาเหตุของโรคอ้วน</Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>          สาเหตุที่ทำให้เกิดโรคอ้วน แบ่งออกเป็น ปัจจัยภายใน และปัจจัยภายนอก ซึ่งส่วนใหญ่แล้วผู้ที่เป็นโรคอ้วน มักมีสาเหตุจากปัจจัยภายนอก เพราะมีพฤติกรรมการรับประทานที่ตามใจตนเอง จนทำให้รับประทานเกินความต้องการของร่างกาย
        </Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>ปัจจัยภายนอก ได้แก่
        </Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>•	รับประทานอาหารที่ให้พลังงานสูง เนื้อ ไขมัน แป้ง ของหวาน</Text>
        <Text style={{fontFamily:'noto'}}>•	รับประทานไม่เป็นเวลา กินจุบกินจิบ</Text>
        <Text style={{fontFamily:'noto'}}>•	นั่งๆ นอนๆ เป็นส่วนใหญ่</Text>
        <Text style={{fontFamily:'noto'}}>•	ขาดการออกกำลังกาย</Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>ปัจจัยภายใน ได้แก่
        </Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>•	ความผิดปกติของต่อมไรท่อ เช่น ต่อมใต้สมอง ต่อมไทรอยด์</Text>
        <Text style={{fontFamily:'noto'}}>•	ภาวะเครียด</Text>
        <Text style={{fontFamily:'noto'}}>•	จิตใจและอารมณ์</Text>
        <Text style={{fontFamily:'noto'}}>•	กรรมพันธุ์</Text>
        <Text style={{fontFamily:'noto'}}>•	โรคประจำตัว เช่น เบาหวาน ความดันโลหิตสูง</Text>
        <Text style={{fontFamily:'noto'}}>•	การรับประทานยาบางชนิด</Text>
        <Text style={{fontFamily:'noto'}}>•	อายุ เนื่องจากอายุมาก จะมีการใช้พลังงานน้อยลง</Text>
        <Text style={{fontFamily:'notos',paddingTop:15,fontSize:16}}>อาการของภาวะอ้วน</Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>          ผู้ที่มีภาวะอ้วน คือ ผู้ที่มีไขมันส่วนเกินสะสมอยู่ในร่างกายปริมาณมาก ทำให้เกิดผลกระทบต่อสุขภาพ คือ หายใจติดขัด นอนกรน เหนื่อยง่าย ร้อนง่าย เหงื่อออกง่าย ทำกิจกรรมต่าง ๆ ได้ยากลำบาก จนอาจทำให้เกิดปัญหาสุขภาพอื่น ๆ รวมถึงความไม่มั่นใจในตนเอง อาจทำให้มีปัญหาด้านความสัมพันธ์หรือการเข้าสังคม และปัญหาสุขภาพจิตอย่างภาวะซึมเศร้าที่อาจเกิดขึ้นตามมา
การวินิจฉัยโรคอ้วน
        </Text>
        
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})