import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

export default function Emotionals() {
  return (
    <View style={{flex:1}}>
    <ScrollView>
      <View style={{paddingHorizontal:15,paddingTop:15,paddingBottom:15}}>
        <Text style={{fontFamily:'notos',textAlign:'center',fontSize:18}}>วิธีการเลือกปฏิบัติด้านอารมณ์</Text>
        <Text style={{fontFamily:'noto'}}>1. หาสาเหตุของความเครียดแล้วจัดการแก้ไขให้ตรงจุด</Text>
        <Text style={{fontFamily:'noto'}}>2. ออกกำลังกายเพื่อลดความเครียด</Text>
        <Text style={{fontFamily:'noto'}}>3. ผ่อนคลายโดยการดูหนัง ฟังเพลง เล่นเกม สนทนากับเพื่อน หรือซื้อของขวัญให้ตัวเอง และทำในสิ่งที่คุณรัก</Text>
        </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})