import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'
import {ListItem,Avatar } from 'react-native-elements';
import { FontAwesome5,FontAwesome,Ionicons,Entypo } from '@expo/vector-icons';

export default function Result({navigation}) {
  return (
    <View style={styles.container}>
    

      
    <View >
    
    <ScrollView showsVerticalScrollIndicator={false}
        
      >
    <View style={{alignItems:'center'}}>
            <Image source={ require('./img/love.png')} style={{width: 190, height:150 }}/>
    </View>
    <Text style={{textAlign:'center',fontFamily:'noto',fontSize:20,paddingBottom:30,paddingTop:20}}>การติดตามในระยะเวลา 4-8 สัปดาห์</Text>
      <ListItem  bottomDivider topDivider onPress={() => navigation.navigate('Results1')}>
      <FontAwesome5 name="list-alt" size={20} color="#333" />
        <ListItem.Content>
          <ListItem.Title><Text style={{fontFamily:'noto'}}>ค่า BMI ค่าความเสี่ยงของโรคอ้วนและระดับความอ้วน</Text></ListItem.Title>
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