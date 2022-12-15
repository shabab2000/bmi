import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import {ListItem,Avatar } from 'react-native-elements';
import { FontAwesome5,FontAwesome,Ionicons,Entypo } from '@expo/vector-icons';

export default function Foodc({navigation}) {
  return (
    <View style={styles.container}>
    

      
    <View >
    
    <ScrollView showsVerticalScrollIndicator={false}
        
      >
   
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('M1')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>หมู่ที่ 1 ประเภทโปรตีน </Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('M2')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>หมู่ที่ 2 ประเภทคาร์โบไฮเดรต </Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('M3')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>หมู่ที่ 3 ประเภทเกลือแร่หรือแร่ธาตุ</Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('M4')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>หมู่ที่ 4 ประเภทวิตามิน</Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('M5')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>หมู่ที่ 5 ประเภทไขมัน</Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('Exs')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>ตัวอย่างอาหาร</Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      
      </ScrollView>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})