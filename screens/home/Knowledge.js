import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'
import {ListItem,Avatar } from 'react-native-elements';
import { FontAwesome5,FontAwesome,Ionicons,Entypo } from '@expo/vector-icons';

export default function Knowledge({navigation}) {
  return (
    <View style={styles.container}>
    

      
    <View >
    
    <ScrollView showsVerticalScrollIndicator={false}
        
      >
    <View style={{alignItems:'center'}}>
            <Image source={ require('./img/aaa.png')} style={{width: 190, height:150 }}/>
    </View>
    <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('Risk')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>ความเสี่ยงของการเกิดโรค</Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('Obesity')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>โรคอ้วน</Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('Foodc')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>การบริโภคอาหารและเครื่องดื่ม</Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('MenuFood')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>เมนูอาหารและพลังงาน</Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('Exercise')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>การออกกำลังกาย</Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('Emotional')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>พฤติกรรมด้านอารมณ์และการพักผ่อน</Text></ListItem.Title>
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