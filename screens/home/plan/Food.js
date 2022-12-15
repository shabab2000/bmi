import React from 'react';
import { View, StyleSheet,ScrollView,Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
  tableHead: ['อาหาร', 'ปริมาณแคลอรี่'],
  tableData: [
    ['อาหารประเภทข้าว', ''],
    ['1.ข้าวผัดกระเพราเนื้อ', '622'],
    ['2.ข้าวราดแกงไก่ผัดเผ็ด', '485'],
    ['3.ข้าวหมกไก่', '534'],
    ['4.ข้าวหน้าเป็ด', '495'],
    ['5.ข้าวไข่เจียว', '445'],
    ['6.ข้าวมันไก่ทอด', '695'],
    ['7.ข้าวหมูแดง', '541'],
    ['8.ข้าวขาหมู', '690'],
    ['9.ข้าวกระเพราหมูกรอบ', '670'],
    ['10.ข้าวเหนียวหมูทอด', '440'],
  ],
};

const CONTENTS = {
    tableHead: ['อาหาร', 'ปริมาณแคลอรี่'],
    tableData: [
      ['อาหารประเภทเส้น', ''],
      ['1.ก๋วยเตี๋ยวเรือน้ำตก', '180'],
      ['2.ก๋วยเตี๋ยวเส้นหมี่น้ำลูกชิ้นเนื้อ', '226'],
      ['3.เกาเหลาลูกชิ้น', '225'],
      ['4.ราดหน้า', '300'],
      ['5.ก๋วยเตี๋ยวต้มยำหมู', '335'],
      ['6.ขนมจีนน้ำยา', '332'],
      ['7.ขนมจีนแกงเขียวหวานไก่', '594'],
      ['8.ขนมจีนน้ำเงี้ยว', '243'],
      ['9.กวยจั๊บ', '240'],
      ['10.กวยจั๊บญวน', '235'],
    ],
  };

  const CONTENT1 = {
    tableHead: ['น้ำหนักตัว (กิโลกรัม)', 'ปริมาณน้ำที่ร่างกายต้องการ (ลิตร)','จำนวนน้ำ (แก้ว)'],
    tableData: [
      ['50', '1,650 ซีซี หรือ 1.6 ลิตร','8'],
      ['60', '1,980 ซีซี หรือ 1.9 ลิตร','10'],
      ['70', '2,310 ซีซี หรือ 2.3 ลิตร','11.5'],
      ['80', '2,640 ซีซี หรือ 2.6 ลิตร','13'],
      ['90', '2,970 ซีซี หรือ 2.9 ลิตร','14.5'],
      ['100 หรือมากกว่า', '3,000 ซีซี หรือ 3 ลิตร','15'],
    ],
  };

export default function Food({navigate,route}) {
  const result = route.params.bmi
  return (
    <View style={styles.container}>
    <ScrollView>
    <View>
      
    </View>
    <View style={{paddingHorizontal:15,paddingTop:15,paddingBottom:15}}>
    {result>=23&&result<=24.9?
    <View>
    <Text style={{fontFamily:'notos'}} >น้ำหนักเกิน (BMI  23.0-24.9 ตร.ม)</Text>
      <Text style={{fontFamily:'notos'}} >การใช้แบบสูตร 6-6-1 (น้ำหนักควรลด
0.5-1 กิโลกรัม)</Text>
      <Text style={{fontFamily:'noto'}} >1.ปริมาณน้ำตาลไม่เกิน 6 ช้อนชาต่อวัน</Text>
      <Text style={{fontFamily:'noto'}} >2.อาหาร 6 อย่างที่ควรหลีกเลี่ยง คือ ไขมัน นม เนย ของทอด เบเกอรี่ทุกชนิด (อาหารทอด 1 อย่าง หรือผัด 1 อย่างต่อวัน)</Text>
      <Text style={{fontFamily:'noto'}} >3.ปริมาณโซเดียม หรือเกลือต่อวัน ควรได้รับไม่เกิน 1 ช้อนชาต่อวัน</Text>
      <Text style={{fontFamily:'noto'}} >4.รับประทานอาหารกลุ่มแป้งลดลง ครึ่ง-1 ทัพพีต่อมื้อ</Text>
      <Text style={{fontFamily:'noto'}} >5.รับประทานผักวันละ 5 ทัพพี</Text>
      <Text style={{fontFamily:'noto'}} >6.ผลไม้แบบไม่หวานจัด เช่น ฝรั่ง ชมพู่ สาลี่ กล้วย ประมาณ 1 ฝ่ามือต่อมื้อ</Text>
      <Text style={{fontFamily:'noto'}} >7.ดื่มน้ำ 1,500 – 1,800 ต่อวัน</Text>
      <Text style={{fontFamily:'noto'}} >8.นอนหลับ 6-7 ชั่วโมงต่อคืน</Text>
      <Text style={{fontFamily:'noto'}} >9.ออกกำลังกาย 30-45 นาที 3-5 วันต่อสัปดาห์</Text>
      <Text style={{fontFamily:'noto'}} >10.ฟังเพลง เล่นเกมส์ สนทนากับเพื่อน (กิจกรรมสันทนาการ)</Text>
      <Text style={{fontFamily:'noto'}} >11.ชั่งน้ำหนัก 1 ครั้งต่อสัปดาห์</Text>
      </View>
      :result>=25&&result<=29.9?
      <View>
    <Text style={{fontFamily:'notos'}} >อ้วนอันตราย 25.0-29.9
(BMI  25.0-29.9 ตร.ม)
อ้วนอันตราย มีภาวะเสี่ยงสูงมากที่จะเกิดโรค เบาหวาน ความดันโลหิตสูง และ โควิด-19 ซึ่ง กลุ่มนี้ต้องแนะนำให้ใช้ทั้งสติ ,สมาธิ และสร้าง แรงจูงใจให้ตัวเอง ว่า “เราต้องไม่มีโรค” และมี ความจำเป็นอย่างยิ่งในการลดน้ำหนัก
</Text>
      <Text style={{fontFamily:'notos'}} >การกินอาหารแบบ 2: 1: 1 ลดพุง ลดเสี่ยงโรค</Text>
      <Text style={{fontFamily:'noto'}} >1.ปริมาณผักครึ่งหนึ่งของจาน 2 ส่วนแรก ( 2 ใน 4 ส่วน) เป็นผักสด หรือผักสุก</Text>
      <Text style={{fontFamily:'noto'}} >2. ปริมาณอาหารประเภทแป้ง 1 ใน 4 ส่วน
ข้าว เส้นก๋วยเตี๋ยว ขนมจีน ขนมปัง เผือก มัน ถั่วธัญพืช (ถั่วดำ ถั่วแดง ถั่วเขียว) ข้าวโพด หรือลูกเดือย รวมทั้งพวก ฟักทอง ปริมาณไม่เกิน 2ทัพพี</Text>
      <Text style={{fontFamily:'noto'}} >3. อาหารประเภทเนื้อสัตว์ 1 ส่วน (1 ใน 4 ส่วน) เป็นเนื้อสัตว์ไขมันแทรกน้อย หรือไขมันต่ำ  เช่น ปลา 
เนื้อไก่ไม่เอาหนัง เนื้อหมูเลือกไม่ติดมัน เลี่ยงพวกแปรรูปต่างๆ เช่น กุนเชียง, ไส้กรอก แหนม แฮม เบคอน หรือจะเป็นโปรตีนจากไข่ ถั่วเหลือง เต้าหู้ โปรตีนเกษตร และสำคัญตรงที่ต้องเลี่ยงของทอด อาจใช้วิธีต้มหรือนึ่งให้สุกโดยปรุงรสน้อยที่สุด</Text>
      <Text style={{fontFamily:'noto'}} >4.ดื่มน้ำ 1,500 – 1,800 ต่อวัน</Text>
      <Text style={{fontFamily:'noto'}} >5.นอนหลับ 6-7 ชั่วโมงต่อคืน</Text>
      <Text style={{fontFamily:'noto'}} >6.ออกกำลังกาย 30-45 นาที 3-5 วันต่อสัปดาห์</Text>
      <Text style={{fontFamily:'noto'}} >7.ฟังเพลง เล่นเกมส์ สนทนากับเพื่อน 
(กิจกรรมสันทนาการ)</Text>
      <Text style={{fontFamily:'noto'}} >8.ชั่งน้ำหนัก 1 ครั้งต่อสัปดาห์</Text>
      </View>
      :result>=30?
      <View>
    <Text style={{fontFamily:'notos'}} >อ้วนอันตรายมาก 
(BMI  30.00  ตร.ม หรือมากกว่า )</Text>
      <Text style={{fontFamily:'notos'}} >สัปดาห์แรก เน้นการปรับการรัประทานอาหาร เมื่อปรับได้จึงสามารถออกกำลังกายได้</Text>
      <Text style={{fontFamily:'noto'}} >1.รับประทานอาหารครบ 3 มื้อ</Text>
      <Text style={{fontFamily:'noto'}} >2.อาหารประเภทเนื้อสัตว์ 2-3 ส่วน (2-3 ใน 4 ส่วน) เป็นเนื้อสัตว์ไขมันแทรกน้อย หรือไขมันต่ำ  เช่น ปลา 
เนื้อไก่ไม่เอาหนัง เนื้อหมูเลือกไม่ติดมัน เลี่ยงพวกแปรรูปต่างๆ เช่น กุนเชียง, ไส้กรอก แหนม แฮม เบคอน หรือจะเป็นโปรตีนจากไข่ ถั่วเหลือง เต้าหู้ โปรตีนเกษตร และสำคัญตรงที่ต้องเลี่ยงของทอด อาจใช้วิธีต้มหรือนึ่งให้สุกโดยปรุงรสน้อยที่สุด</Text>
      <Text style={{fontFamily:'noto'}} >3.ปริมาณผักครึ่งหนึ่งของจาน 1 ส่วนแรก ( 2 ใน 4 ส่วน)
เป็นผักสด หรือผักสุก</Text>
      <Text style={{fontFamily:'noto'}} >4.ปริมาณอาหารประเภทแป้ง 1 ใน 4 ส่วน ข้าว เส้นก๋วยเตี๋ยว ขนมจีน ขนมปัง เผือก มัน ถั่วธัญพืช (ถั่วดำ ถั่วแดง ถั่วเขียว) ข้าวโพด หรือลูกเดือย รวมทั้งพวก ฟักทอง ลดปริมาณลงจาก 2 ทัพพี, 1 ทัพพี, ครึ่งทัพพี
จนลดแป้งลงได้ในบางมื้อ
</Text>
      <Text style={{fontFamily:'noto'}} >5.พักผ่อนโดยการนอนหลับอย่างมีประสิทธิภาพ 7-8 ชั่วโมง</Text>
      <Text style={{fontFamily:'noto'}} >6.ฟังเพลง เล่นเกมส์ สนทนากับเพื่อน (กิจกรรมสันทนาการ) ลดเครียด ลดความหิว
</Text>
      <Text style={{fontFamily:'noto'}} >7.ดื่มน้ำ 2000 – 3000 ซีซี. (2-3 ลิตร)</Text>
      <Text style={{fontFamily:'noto'}} >8.หากควบคุมอาหารได้แล้ว เริ่มออกกำลังกาย 
เดิน เดินเร็ว ยกเวท นาน 45-60 นาที 
เริ่มจาก 3 วันเพิ่มเป็น 5 วันต่อสัปดาห์</Text>
      <Text style={{fontFamily:'noto'}} >9.ชั่งน้ำหนัก 1 ครั้งต่อสัปดาห์</Text>
      </View>
      :null}
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT.tableHead}
          flexArr={[ 1, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          
          <Rows
            data={CONTENT.tableData}
            flexArr={[ 1, 1]}
            style={styles.row}
            textStyle={{paddingLeft:10,fontFamily:'noto'}}
          />
        </TableWrapper>
      </Table>
      <View style={{paddingTop:20}}/>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENTS.tableHead}
          flexArr={[ 1, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          
          <Rows
            data={CONTENTS.tableData}
            flexArr={[ 1, 1]}
            style={styles.row}
            textStyle={{paddingLeft:10,fontFamily:'noto'}}
          />
        </TableWrapper>
      </Table>
      <Text style={{fontFamily:'notos',textAlign:'center',paddingTop:20}}>ปริมาณน้ำดื่มในแต่ละวัน </Text>
      <View style={{paddingTop:20}}/>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT1.tableHead}
          flexArr={[ 1, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          
          <Rows
            data={CONTENT1.tableData}
            flexArr={[ 1, 1]}
            style={styles.row}
            textStyle={{paddingLeft:10,fontFamily:'noto',textAlign:'center'}}
          />
        </TableWrapper>
      </Table>
      <Text style={{fontFamily:'notos',paddingTop:10}}>หมายเหตุ จากสูตร น้ำหนักตัว X 33 = ปริมาณน้ำดื่ม/วัน</Text>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  head: {  backgroundColor: 'orange' },
  wrapper: { flexDirection: 'row' },
  row: {  },
  text: { textAlign: 'center',fontFamily:'noto' },
});