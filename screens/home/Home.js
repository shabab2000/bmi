import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center',fontFamily:'noto',fontSize:18,paddingTop:20}}>ข้อมูลเพื่อลดความอ้วน</Text>
    
    <View style={{paddingTop:20}}>
    <View style={styles.views}>
      <TouchableOpacity style={styles.touch} onPress={()=> navigation.navigate('Knowledge')}>
        <Text style={styles.title}>แหล่งความรู้</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.views}>
      <TouchableOpacity style={styles.touch} onPress={()=> navigation.navigate('Plans',{bmi:0})}>
        <Text style={styles.title}>เลือกแผนปฏิบัติ</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.views}>
      <TouchableOpacity style={styles.touch} onPress={()=> navigation.navigate('Results')}>
        <Text style={styles.title}>ผลการติดตาม</Text>
      </TouchableOpacity>
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  title:{
    fontFamily:'noto',
    fontSize:18
  },
  touch:{
    paddingLeft:20,
    paddingBottom:10,
    paddingTop:10,
    backgroundColor:'#eeccff'
  },
  views:{
    padding:5
  }
});
