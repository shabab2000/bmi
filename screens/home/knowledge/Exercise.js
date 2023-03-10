import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
    tableHead: ['ประเภทกิจกรรม 1 ชั่วโมง', 'การเผาผลาญ (กิโลแคลอรี่)'],
    tableData: [
      ['กรรเชียงเรือด้วยความเร็ว 17.6กม./ชม.', '970 กิโลแคลอรี่'],
      ['กรรเชียงเรือด้วยความเร็ว 5.6กม./ชม.', '660 กิโลแคลอรี่'],
      ['กระโดดเชือก', '780 กิโลแคลอรี่'],
      ['ขี่จักรยานด้วยความเร็ว 20.0กม./ชม.', '660 กิโลแคลอรี่'],
      ['ขี่จักรยานด้วยความเร็ว 14.4กม./ชม.', '415 กิโลแคลอรี่'],
      ['ขี่จักรยาน', '250-600 กิโลแคลอรี่'],
      ['กวาดพื้น', '225 กิโลแคลอรี่'],
      ['การเต้น Zumba', '500 กิโลแคลอรี่'],
      ['ซักผ้าด้วยมือ', '240 กิโลแคลอรี่'],
      ['ตัดหญ้า', '250-300 กิโลแคลอรี่'],
      ['ตีกอล์ฟ ลากถุงกอล์ฟ', '300 กิโลแคลอรี่'],
      ['ทำงานบ้าน', '150-250 กิโลแคลอรี่'],
      ['ทำสวน', '300-450 กิโลแคลอรี่'],
      ['นั่งดูทีวี', '100 กิโลแคลอรี่'],
      ['นั่งทำงานใช้สมอง', '110 กิโลแคลอรี่'],
      ['นอนหลับ', '75 กิโลแคลอรี่'],
      ['บาสเก็ตบอล', '360-660 กิโลแคลอรี่'],
      ['ปูที่นอน', '135 กิโลแคลอรี่'],
      ['มวยไทย', '800 กิโลแคลอรี่'],
      ['ยืน', '150 กิโลแคลอรี่'],
      ['วิ่งบนทางราบด้วยความเร็ว 12.8กม./ชม.', '825 กิโลแคลอรี่'],
      ['วิ่งเร็ว', '900-1,200 กิโลแคลอรี่'],
      ['วิ่งเหยาะๆ', '600-750 กิโลแคลอรี่'],
      ['ว่ายน้ำ', '260-750 กิโลแคลอรี่'],
      ['ว่ายน้ำด้วยความเร็ว 3.00กม./ชม.', '850 กิโลแคลอรี่'],
      ['รีดผ้า', '150 กิโลแคลอรี่'],
      ['เดินขึ้นบันได', '600-1,080 กิโลแคลอรี่'],
      ['เดินขึ้นเนิน', '480-900 กิโลแคลอรี่'],
      ['เดินธรรมดา', '300 กิโลแคลอรี่'],
      ['เล่นวอลเล่ย์บอล', '300 กิโลแคลอรี่'],
      ['เล่นสเก็ตปกติ', '420 กิโลแคลอรี่'],
      ['เล่นสเก็ตแข่งความเร็ว', '700 กิโลแคลอรี่'],
      ['เล่นฮูล่าฮูป', '430 กิโลแคลอรี่'],
      ['เล่นเทนนิสคู่', '360 กิโลแคลอรี่'],
      ['เล่นเทนนิสเดี่ยว', '480 กิโลแคลอรี่'],
      ['เล่นแบดมินตัน', '350 กิโลแคลอรี่'],
      ['เล่นโบว์ลิ่ง', '400 กิโลแคลอรี่'],
      ['แอโรบิค', '600 กิโลแคลอรี่'],
      ['ออกกำลังกายแบบ HIT', '700-800 กิโลแคลอรี่'],
    ],
  };

export default function Exercise({navigation}) {
  return (
    <View style={{flex:1}}>
    <ScrollView>
      <View style={{paddingHorizontal:15,paddingTop:15,paddingBottom:15}}>
        <Text style={{fontFamily:'noto'}}>          <Text style={{fontFamily:'notos'}}>การออกกำลังกาย</Text> เป็นกิจกรรมทางกายใด ๆ ก็ได้ที่เสริมหรือคงสภาพสมรรถภาพทางกาย ความแข็งแรงและสุขภาพทั่วไปของร่างกาย อาจทำเพราะเหตุต่าง ๆ รวมทั้งเพื่อเสริมการเติบโตและพัฒนาการของร่างกาย ป้องกันไม่ให้แก่เร็ว เสริมสร้างความแข็งแรงของกล้ามเนื้อและระบบไหลเวียนโลหิต ปรับปรุงทักษะทางกีฬา ลดหรือรักษาน้ำหนัก และเพื่อความสนุก การออกกำลังกายอย่างสม่ำเสมอจะช่วยสร้างเสริมระบบภูมิคุ้มกันและช่วยป้องกันโรคต่าง ๆ เช่นโรคหัวใจร่วมหลอดเลือด เบาหวาน และโรคอ้วน หลาย ๆ คนเลือกออกกำลังกายนอกบ้านที่ทำเป็นกลุ่มเพื่อสังสรรค์ และเพื่อความสุข การออกกำลังกายยังช่วยสร้างเสริมสุขภาพจิตและลดความเครียดได้
        </Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>            การออกกำลังกายปกติจะจัดเป็น 3 ประเภท </Text>
        <Text style={{fontFamily:'noto',paddingTop:10,}}>•	การออกกำลังกายใช้ออกซิเจน (การออกกำลังกายแบบแอโรบิก) เป็นกิจกรรมทางกายใดก็ได้ที่ใช้กล้ามเนื้อใหญ่ ๆ และทำให้ร่างกายใช้ออกซิเจนมากกว่าเทียบกับเมื่อพักจุดมุ่งหมายก็เพื่อเพิ่มความแข็งแรง/ความคงทนของระบบหัวใจร่วมหลอดเลือด ตัวอย่างรวมทั้งการวิ่ง ปั่นจักรยาน ว่ายน้ำ เดินเร็ว กระโดดเชือก พายเรือ เดินป่า/เขา เล่นเทนนิส เป็นต้น</Text>
        <Text style={{fontFamily:'noto',paddingTop:10,}}>•	การออกกำลังกายไม่ใช้ออกซิเจน (การออกกำลังกายแบบอะแนโรบิก) รวมทั้งการฝึกเพื่อสร้างความแข็งแกร่ง ช่วยเพิ่มความแน่นและความแข็งแรงของกล้ามเนื้อ เพิ่มความแข็งแรงของกระดูก ปรับปรุงการทรงร่างกายและการทำงานร่วมกันของกล้ามเนื้อ[5] ตัวอย่างรวมทั้งการวิดพื้น การดึงข้อ การงอเข้าข้างหนึ่งไปข้างหน้าโดยมีเท้าราบกับพื้นและขาอีกข้างหนึ่งยื่นไปข้างหลัง การฝึกโดยใช้น้ำหนัก การฝึกร่างกายเพื่อทำกิจในชีวิตประจำวัน การฝึกร่างกายออกกำลังกายอย่างหนักสลับกับออกกำลังแบบพักระยะสั้น ๆ (high-intensity interval training, HIIT) การวิ่งเร็ว เป็นต้น </Text>
        <Text style={{fontFamily:'noto',paddingTop:10,}}>•	การยืดหยุ่นตัวช่วยยืดกล้ามเนื้อ ช่วยทำให้ข้อต่อและกล้ามเนื้อยืดหยุ่นได้โดยหมายปรับพิสัยการเคลื่อนไหวซึ่งช่วยลดโอกาสได้รับบาดเจ็บ </Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>          การออกกำลังกายช่วยธำรงสมรรถภาพทางกาย ช่วยรักษาน้ำหนักให้ถูกสุขภาพ ช่วยย่อยอาหาร ช่วยสร้างและรักษาความหนาแน่นของกระดูก ความแข็งแรงของกล้ามเนื้อ และความยืดหยุ่นได้ของข้อต่อ ลดความเสี่ยงเมื่อผ่าตัด และเสริมความแข็งแรงของระบบภูมิคุ้มกัน งานศึกษาบางงานชี้ว่า การออกกำลังกายอาจเพิ่มการคาดหมายคงชีพและคุณภาพชีวิตโดยทั่วไป</Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>          บุคคลที่ออกกำลังกายหนักปานกลางจนถึงหนักมีอัตราตายที่ต่ำกว่า เทียบกับบุคคลที่ไม่ค่อยออกกำลังการออกกำลังกายหนักปานกลางมีสหสัมพันธ์กับความไม่แก่เร็วเพราะลดโอกาสเกิดการอักเสบ ประโยชน์โดยมากสามารถได้เมื่อออกกำลังกายเป็นระยะเท่ากับ 3,500 นาที metabolic equivalent (MET)  ต่ออาทิตย์ ยกตัวอย่างเช่น การขึ้นบันไดเป็นเวลา 10 นาที ดูดฝุ่น 15 นาที ทำสวน 20 นาที วิ่ง 20 นาที เดินหรือขี่จักรยานเพื่อเดินทาง 25 นาทีทุก ๆ วัน รวม ๆ กันจะได้ 3,000 นาที MET ต่ออาทิตย์ ทั่วโลกการขาดออกกำลังกายเป็นเหตุของภาระโรคเพราะโรคหลอดเลือดเลี้ยงหัวใจ (CHD) 6% เพราะเบาหวานชนิดที่สอง 7% เพราะมะเร็งเต้านมและมะเร็งลำไส้ใหญ่ 10% การขาดการออกกำลังกายเป็นเหตุให้เสียชีวิตก่อนวัย 9% </Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>          ถ้าหากว่ากำลังพยายามจะลด เพิ่ม หรือรักษาน้ำหนักอยู่ ควรเริ่มต้นด้วยการคำนวณอัตราการเผาผลาญพลังงาน (BMR) BMR คือ ปริมาณพลังงานที่ร่างกายใช้เมื่ออยู่ในสภาพพักผ่อน พูดง่ายๆ ก็คือ พลังงานที่ร่างกายจำเป็นต้องใช้เพื่อให้อวัยวะทำงานได้และทำให้มีชีวิตอยู่รอดในแต่ละวัน โดยไม่นับรวมกิจกรรมทางกายใดๆ ทั้งสิ้น ค่า BMR จะเปลี่ยนแปลงได้ด้วยหลายปัจจัย ที่สำคัญที่สุดคือ เพศ อายุ ความสูง และน้ำหนัก แต่ปริมาณไขมันในร่างกาย อาหาร และนิสัยการออกกำลังกายก็มีบทบาทเช่นกัน ต่อไปนี้คือวิธีการง่ายๆ ในการหาค่า BMR ในผู้ชายและผู้หญิง</Text>
        <Text style={{fontFamily:'notos',paddingTop:15}}>วิธีการคำนวณBMR ในผู้ชายและผู้หญิง</Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>สูตรคำนวณอัตราการเผาผลาญของร่างกายในชีวิตประจำวัน (Body Metabolic Rate) คือ</Text>
        <Text style={{fontFamily:'notos',paddingTop:15}}>สำหรับผู้ชาย </Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>BMR = 66 + (13.7 x น้ำหนักตัวเป็น กก.) + (5 x ส่วนสูงเป็น ซม.) – (6.8 x อายุ) </Text>
        <Text style={{fontFamily:'notos',paddingTop:15}}>สำหรับผู้หญิง </Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>BMR = 665 + (9.6 x น้ำหนักตัวเป็น กก.) + (1.8 x ส่วนสูงเป็น ซม.) – (4.7 x อายุ)  </Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>โดยตัวแปรจะขึ้นอยู่กับการออกกำลังดังนี้</Text>
        <Text style={{fontFamily:'noto',paddingTop:15}}>•	นั่งทำงานอยู่กับที่ และไม่ได้ออกกำลังกายเลย = BMR x 1.2 </Text>
        <Text style={{fontFamily:'noto'}}>•	ออกกำลังกายหรือเล่นกีฬาเล็กน้อย ประมาณอาทิตย์ละ 1-3 วัน = BMR x 1.375 </Text>
        <Text style={{fontFamily:'noto'}}>•	ออกกำลังกายหรือเล่นกีฬาปานกลาง ประมาณอาทิตย์ละ 3-5 วัน = BMR x 1.55 </Text>
        <Text style={{fontFamily:'noto'}}>•	ออกกำลังกายหรือเล่นกีฬาอย่างหนัก ประมาณอาทิตย์ละ 6-7 วัน = BMR x 1.725  </Text>
        <Text style={{fontFamily:'noto'}}>•	ออกกำลังกายหรือเล่นกีฬาอย่างหนักทุกวันเช้าเย็น = BMR x 1.9 </Text>
        <Text style={{fontFamily:'notos',paddingTop:15}}>กิจกรรมการเผาผลาญแคลอรี่</Text>
        <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT.tableHead}
          flexArr={[ 1.3, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          
          <Rows
            data={CONTENT.tableData}
            flexArr={[ 1.3, ,1]}
            style={styles.row}
            textStyle={{paddingLeft:10,fontFamily:'noto'}}
          />
        </TableWrapper>
      </Table>
        </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    head: { height: 40,  },
    wrapper: { flexDirection: 'row' },
    row: {  },
    text: { textAlign: 'center',fontFamily:'noto' },
  });