import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import {ListItem,Avatar } from 'react-native-elements';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome5,FontAwesome,Ionicons,Entypo } from '@expo/vector-icons';

export default function Plans({navigation,route}) {
  const result = route.params.bmi

  
  return (
    <View style={styles.container}>
    

      
    <View >
    
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{padding:20}}>
    <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Image source={ require('./img/berger.png')} style={{width: 80, height:80 }}/>
            <Image source={ require('./img/people.png')} style={{width: 80, height:80 }}/>
            <Image source={ require('./img/azx.png')} style={{width: 80, height:80 }}/>
            <Image source={ require('./img/ps.png')} style={{width: 80, height:80 }}/>
    </View>
    </View>
    {result!=null?
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('Food',{bmi:result})}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>เมนูอาหาร</Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
:
<ListItem  bottomDivider topDivider onPress={() => navigation.navigate('Food',{bmi:0})}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>เมนูอาหาร</Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    }
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('Activity')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>กิจกรรมทางกาย</Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('Relaxation')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>การพักผ่อน</Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('Emotionals')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>พฤติกรรมด้านอารมณ์</Text></ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      
      </ScrollView>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({})