import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
    tableHead: ['อาหาร', 'ปริมาณแคลอรี่'],
    tableData: [
      ['อาหารประเภท Fast food ',''],
      ['1. เฟรนช์ฟรายส์ไซต์ปกติ 100 กรัม','319 กิโลแคลอรี่'],
      ['2. นักเก็ตส์ 1 ชิ้น','45 กิโลแคลอรี่'],
      ['3. พิซซ่าถาดกลาง','876 กิโลแคลอรี่'],
      ['4. สปาเก็ตตี้ ','371 กิโลแคลอรี่'],
      ['5. ไก่ทอด (สะโพก) 1 ชิ้น','310 กิโลแคลอรี่'],
      ['6. แซนด์วิชไส้กรอบชีส 1 ชิ้น','297 กิโลแคลอรี่'],
      ['7. แฮมเบอร์เกอร์','250 กิโลแคลอรี่'],
      ['8. คอร์นด็อกชีสยืด','262 กิโลแคลอรี่'],
      ['9. รามยอนเกาหลีแบบน้ำ กิมจิ','510 กิโลแคลอรี่'],
      ['10. รามยอนเกาหลีแบบแห้ง ไก่เผ็ด','530 กิโลแคลอรี่']
    ],
  };
  const CONTENT1 = {
    tableHead: ['อาหาร', 'ปริมาณแคลอรี่'],
    tableData: [
      ['อาหารประเภทเนื้อสัตว์',''],
      ['1. เนื้อสันคอย่าง 100 กรัม','395 กิโลแคลอรี่'],
      ['2. ไก่ย่าง 100 กรัม','165 กิโลแคลอรี่'],
      ['3. หมูย่าง (ไม่ติดหนัง) 100 กรัม','208 กิโลแคลอรี่'],
      ['4. เป็ดย่าง 100 กรัม','261 กิโลแคลอรี่'],
      ['5. แซลมอนย่างเกลือ 100 กรัม','191 กิโลแคลอรี่'],
      ['6. ปลาหมึกย่าง 100 กรัม','100 กิโลแคลอรี่'],
      ['7. กุ้งเผา 100 กรัม','96 กิโลแคลอรี่'],
      ['8. เบคอน 3 ชิ้น','270 กิโลแคลอรี่'],
      ['9. เนื้อวัวสไลด์ 3 ชิ้น','154 กิโลแคลอรี่'],
      ['10. เนื้อหมูสไลด์ 3 ชิ้น','175 กิโลแคลอรี่']
    ],
  };
  const CONTENT2 = {
    tableHead: ['อาหาร', 'ปริมาณแคลอรี่'],
    tableData: [
      ['อาหารประเภทผลไม้',''],
      ['1. กีวี่ 100 กรัม ','60 กิโลแคลอรี่'],
      ['2. อะโวคาโด 100 กรัม ','189 กิโลแคลอรี่'],
      ['3. ทุเรียนหมอนทอง 100 กรัม ','163 กิโลแคลอรี่'],
      ['4. เชอร์รี่ 100 กรัม ','60 กิโลแคลอรี่'],
      ['5. แตงโม 100 กรัม ','30 กิโลแคลอรี่'],
      ['6. แอปเปิ้ล 100 กรัม ','50 กิโลแคลอรี่'],
      ['7. สับปะรด 100 กรัม ','50 กิโลแคลอรี่'],
      ['8. ส้ม 100 กรัม ','47 กิโลแคลอรี่'],
      ['9. ฝรั่ง 100 กรัม ','68 กิโลแคลอรี่'],
      ['10. สตรอเบอร์รี่ 100 กรัม','32 กิโลแคลอรี่'],
    ],
  };
  const CONTENT3 = {
    tableHead: ['อาหาร', 'ปริมาณแคลอรี่'],
    tableData: [
      ['อาหารประเภทผัก',''],
      ['1. เห็ดเข็มทอง','36.3 กิโลแคลอรี่'],
      ['2. มะเขือเทศ','17.7 กิโลแคลอรี่'],
      ['3. ผักกาดหอม','18.4 กิโลแคลอรี่'],
      ['4. แครอท','41.3 กิโลแคลอรี่'],
      ['5. บร็อกโคลี่','33.7 กิโลแคลอรี่'],
      ['6. ผักกาดขาว','12 กิโลแคลอรี่'],
      ['7. ฟักทอง','20 กิโลแคลอรี่'],
      ['8. ผักบุ้ง','24 กิโลแคลอรี่'],
      ['9. ข้าวโพดอ่อน','33 กิโลแคลอรี่'],
      ['10. คะน้า','22.5 กิโลแคลอรี่'],
    ],
  };
  const CONTENT4 = {
    tableHead: ['อาหาร', 'ปริมาณแคลอรี่'],
    tableData: [
      ['อาหารประเภทเบอเกอรี่',''],
      ['1. บราวนีกรอบ','352 กิโลแคลอรี่'],
      ['2. บราวนี','366 กิโลแคลอรี่'],
      ['3. ทาร์ตไข่','250 กิโลแคลอรี่'],
      ['4. เค้กช๊อคโกแลตลาวา','370 กิโลแคลอรี่'],
      ['5. วาฟเฟิล','149 กิโลแคลอรี่'],
      ['6. คัพเค้ก','305 กิโลแคลอรี่'],
      ['7. มาการอง','100 กิโลแคลอรี่'],
      ['8. ขนมไดฟุกุ','148 กิโลแคลอรี่'],
      ['9. ชีสเค้กสตรอเบอร์รี่','390 กิโลแคลอรี่'],
      ['10. ครัวซองต์ ','406 กิโลแคลอรี่'],
    ],
  };
  const CONTENT5 = {
    tableHead: ['อาหาร', 'ปริมาณแคลอรี่'],
    tableData: [
      ['อาหารประเภทขนมหวาน',''],
      ['1. ข้าวเหนียวมะม่วง 100 กรัม','400 กิโลแคลอรี่'],
      ['2. บัวลอยไข่หวาน 100 กรัม','420 กิโลแคลอรี่'],
      ['3. ลูกชุบ 100 กรัม','284 กิโลแคลอรี่'],
      ['4. ขนมเบื้อง 100 กรัม','300 กิโลแคลอรี่'],
      ['5. ข้าวเหนียวหน้าสังขยา 100 กรัม','249 กิโลแคลอรี่'],
      ['6. ขนมหมอแก้ง 100 กรัม','244 กิโลแคลอรี่'],
      ['7. ฝอยทอง 100 กรัม','433 กิโลแคลอรี่'],
      ['8. เม็ดขนุน 100 กรัม','341 กิโลแคลอรี่'],
      ['9. ข้าวเหนียวทุเรียน 100 กรัม','450 กิโลแคลอรี่'],
      ['10. สังขยาฟักทอง 100 กรัม','288 กิโลแคลอรี่'],
    ],
  };
  const CONTENT6 = {
    tableHead: ['อาหาร', 'ปริมาณแคลอรี่'],
    tableData: [
      ['อาหารประเภทเครื่องดื่มที่มีน้ำตาล',''],
      ['1. ชานมไข่มุก','320 กิโลแคลอรี่'],
      ['2. ชาเขียวเย็น','319 กิโลแคลอรี่'],
      ['3. น้ำอัดลม','280 กิโลแคลอรี่'],
      ['4. โกโก้เย็น','334 กิโลแคลอรี่'],
      ['5. นมเย็น','425 กิโลแคลอรี่'],
      ['6. กาแฟเย็น','317 กิโลแคลอรี่'],
      ['7. กีวีปั่น','250 กิโลแคลอรี่'],
      ['8. แตงโมปั่น','120 กิโลแคลอรี่'],
      ['9. สตรอเบอร์รี่ปั่น','270 กิโลแคลอรี่'],
      ['10. ส้มปั่น','340 กิโลแคลอรี่'],
    ],
  };
export default function MenuFood() {
  return (
    <View style={{flex:1}}>
    <ScrollView>
      <View style={{paddingHorizontal:15,paddingTop:15}}>
      <Text style={{fontFamily:'notos',textAlign:'center'}}>อาหารและปริมาณแคลอรี่</Text>
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
      <View style={{padding:10}}/>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT1.tableHead}
          flexArr={[ 1.3, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          
          <Rows
            data={CONTENT1.tableData}
            flexArr={[ 1.3, ,1]}
            style={styles.row}
            textStyle={{paddingLeft:10,fontFamily:'noto'}}
          />
        </TableWrapper>
      </Table>
      <View style={{padding:10}}/>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT2.tableHead}
          flexArr={[ 1.3, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          
          <Rows
            data={CONTENT2.tableData}
            flexArr={[ 1.3, ,1]}
            style={styles.row}
            textStyle={{paddingLeft:10,fontFamily:'noto'}}
          />
        </TableWrapper>
      </Table>
      <View style={{padding:10}}/>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT3.tableHead}
          flexArr={[ 1.3, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          
          <Rows
            data={CONTENT3.tableData}
            flexArr={[ 1.3, ,1]}
            style={styles.row}
            textStyle={{paddingLeft:10,fontFamily:'noto'}}
          />
        </TableWrapper>
      </Table>
      <View style={{padding:10}}/>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT4.tableHead}
          flexArr={[ 1.3, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          
          <Rows
            data={CONTENT4.tableData}
            flexArr={[ 1.3, ,1]}
            style={styles.row}
            textStyle={{paddingLeft:10,fontFamily:'noto'}}
          />
        </TableWrapper>
      </Table>
      <View style={{padding:10}}/>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT5.tableHead}
          flexArr={[ 1.3, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          
          <Rows
            data={CONTENT5.tableData}
            flexArr={[ 1.3, ,1]}
            style={styles.row}
            textStyle={{paddingLeft:10,fontFamily:'noto'}}
          />
        </TableWrapper>
      </Table>
      <View style={{padding:10}}/>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT6.tableHead}
          flexArr={[ 1.3, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          
          <Rows
            data={CONTENT6.tableData}
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
    head: {   },
    wrapper: { flexDirection: 'row' },
    row: {  },
    text: { textAlign: 'center',fontFamily:'noto' },
  });