import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

export default function Relaxation() {
  return (
    <View style={{flex:1}}>
    <ScrollView>
      <View style={{paddingHorizontal:15,paddingTop:15,paddingBottom:15}}>
        <Text style={{fontFamily:'notos',textAlign:'center',fontSize:18}}>วิธีการเลือกการพักผ่อน</Text>
        <Text style={{fontFamily:'noto'}}>1. นอนหลับให้เพียงพอ มากกว่า 7 ซม.ต่อวัน</Text>
        <Text style={{fontFamily:'noto'}}>2. อย่าอดอาหารหรืองดอาหารมื้อใดมื้อหนึ่ง</Text>
        <Text style={{fontFamily:'noto'}}>3. หลีกเลี่ยงเครื่องดื่มกาแฟ งดสูบบุหรี่ และหลีกเหลี่ยงเครื่องดื่มที่มีแอลกอฮอลล์</Text>
        </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})