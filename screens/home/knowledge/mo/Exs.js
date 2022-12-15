import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
    tableHead: ['รายการอาหาร', 'พลังงาน (กิโลแคลอรี่)','คาร์โบไฮเดรต(กรัม)','ไขมัน(กรัม)','โปรตีน(กรัม)','ปริมาณ 1 หน่วยบริโภค'],
    tableData: [
      ['ข้าวมันไก่', '02.45','60.30','00.90','08.03','1จาน=230 กรัม'],
      ['ขนมปังทาเนย 1 แผ่น', '10.04','14.49','00.29','00.34','1แผ่น=12กรัม+เนย1กรัม'],
      ['ปาท่องโก 1 ตัว 16 กรัม', '43.68','14.86','00.43','00.41','1 ตัว= 2 ขา'],
      ['ข้าวต้มหมู 1 ชาม', '03.89','39.12','00.80','02.48','1 ชาม= 180 กรัม'],
      ['ข้ามต้มกุ้ง', '30.19','38.97','00.97','01.48','1 ชาม= 180 กรัม'],
      ['ข้าวเหนียวหมูปิ้ง', '59.84','42.06','00.74','01.75','ข้าวเหนียวนึ่ง = 80 กรัม,หมูปิ้ง 4 ชิ้น'],
      ['นมจืด 1 แก้ว', '67.50','12.25','00.50','00.25','1 แก้ว = 250 cc'],
      ['นมถั่วเหลือง 1 แก้ว', '02.50','25.00','00.75','00.25','1 แก้ว = 250 cc'],
      ['น้ำส้ม 100%', '23.20','29.05','00.22','00.12','1 แก้ว = 250 cc'],
      ['กาแฟ (ผง) 1 in 1 ', '09.59','14.70','00.30','00.14',''],
      ['เครื่องดื่มรสช็อกโกแลต (ผง) 1 in 1', '50.00','24.00','00.00','00.00',''],
      
    ],
  };
export default function Exs() {
  return (
    <View style={{flex:1}}>
    <ScrollView>
      <View style={{paddingHorizontal:15,paddingTop:15}}>
      <Text style={{fontFamily:'notos'}}>ตัวอย่างอาหาร</Text>
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
      <Text style={{fontFamily:'noto',textAlign:'center'}}>คำนวณโดยโปรแกรม INMUCAL ของสถาบันโภชนาการ มหาวิทยาลัยมหิดล</Text>
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