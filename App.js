import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Reset from './screens/Reset';
import ResetPass from './screens/ResetPass';
import Otp from './screens/Otp';
import HomePage from './screens/HomePage';
import Knowledge from './screens/home/Knowledge';
import Plans from './screens/home/Plans';
import Result from './screens/home/Result';
import Obesity from './screens/home/knowledge/Obesity';
import Exercise from './screens/home/knowledge/Exercise';
import Food from './screens/home/plan/Food';
import Foodc from './screens/home/knowledge/Foodc';
import M1 from './screens/home/knowledge/mo/M1';
import M2 from './screens/home/knowledge/mo/M2';
import M3 from './screens/home/knowledge/mo/M3';
import M4 from './screens/home/knowledge/mo/M4';
import M5 from './screens/home/knowledge/mo/M5';
import Exs from './screens/home/knowledge/mo/Exs';
import MenuFood from './screens/home/knowledge/MenuFood';
import Emotional from './screens/home/knowledge/Emotional';
import Activity from './screens/home/plan/Activity';
import Relaxation from './screens/home/plan/Relaxation';
import Emotionals from './screens/home/plan/Emotionals';
import Results from './screens/home/Results';
import EditProfile from './screens/home/EditProfile';
import EditPassword from './screens/home/EditPassword';
import Risk from './screens/home/knowledge/Risk';

const Stack = createStackNavigator();

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={horizontalAnimation}>
      
      <Stack.Screen name='Home' component={Home} options={{ 
        headerShown: false,
        title: 'Home',
          headerStyle: {
          backgroundColor: '#48D1CC'
          }}}/>
      <Stack.Screen name='Register' component={Register} options={{ 
        headerShown: false,
        title: 'Register',
          headerStyle: {
          backgroundColor: '#48D1CC'
          }}}/>
      <Stack.Screen name='Login' component={Login} options={{ 
        headerShown: false,
        title: 'Login',
          headerStyle: {
          backgroundColor: '#48D1CC'
          }}}/>
      <Stack.Screen name='Reset' component={Reset} options={{ 
        headerShown: false,
        title: 'Login',
          headerStyle: {
          backgroundColor: '#48D1CC'
          }}}/>
      <Stack.Screen name='ResetPass' component={ResetPass} options={{ 
        headerShown: false,
        title: 'ResetPass',
          headerStyle: {
          backgroundColor: '#48D1CC'
          }}}/>
      <Stack.Screen name='Otp' component={Otp} options={{ 
        headerShown: false,
        title: 'Otp',
          headerStyle: {
          backgroundColor: '#48D1CC'
          }}}/>
      <Stack.Screen name='HomePage' component={HomePage} options={{ 
        headerShown: false,
        title: 'HomePage',
          headerStyle: {
          backgroundColor: '#48D1CC'
          }}}/>
      <Stack.Screen name='Knowledge' component={Knowledge} options={{ 
        headerShown: true,
        title: 'แหล่งความรู้',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
      <Stack.Screen name='Plans' component={Plans} options={{ 
        headerShown: true,
        title: 'เลือกแผนปฏิบัติ',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
      <Stack.Screen name='Results' component={Result} options={{ 
        headerShown: true,
        title: 'ผลการติดตาม',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
      <Stack.Screen name='Obesity' component={Obesity} options={{ 
        headerShown: true,
        title: 'โรคอ้วน',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
      <Stack.Screen name='Food' component={Food} options={{ 
        headerShown: true,
        title: 'อาหาร',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
      <Stack.Screen name='Exercise' component={Exercise} options={{ 
        headerShown: true,
        title: 'การออกกำลังกาย',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='Foodc' component={Foodc} options={{ 
        headerShown: true,
        title: 'การบริโภคอาหารและเครื่องดื่ม',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='M1' component={M1} options={{ 
        headerShown: true,
        title: 'หมู่ที่ 1 ประเภทโปรตีน',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='M2' component={M2} options={{ 
        headerShown: true,
        title: 'หมู่ที่ 2 ประเภทคาร์โบไฮเดรต',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='M3' component={M3} options={{ 
        headerShown: true,
        title: 'หมู่ที่ 3 ประเภทเกลือแร่หรือแร่ธาตุ ',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='M4' component={M4} options={{ 
        headerShown: true,
        title: 'หมู่ที่ 4 ประเภทวิตามิน ',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='M5' component={M5} options={{ 
        headerShown: true,
        title: 'หมู่ที่ 5 ประเภทไขมัน ',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='Exs' component={Exs} options={{ 
        headerShown: true,
        title: 'ตัวอย่างอาหาร ',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='MenuFood' component={MenuFood} options={{ 
        headerShown: true,
        title: 'เมนูอาหารและพลังงาน',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='Emotional' component={Emotional} options={{ 
        headerShown: true,
        title: 'พฤติกรรมด้านอารมณ์และการพักผ่อน',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='Activity' component={Activity} options={{ 
        headerShown: true,
        title: 'กิจกรรมทางกาย',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='Relaxation' component={Relaxation} options={{ 
        headerShown: true,
        title: 'การพักผ่อน',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='Emotionals' component={Emotionals} options={{ 
        headerShown: true,
        title: 'พฤติกรรมด้านอารมณ์',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='Results1' component={Results} options={{ 
        headerShown: true,
        title: 'รายงานผลการติดตาม',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='EditProfile' component={EditProfile} options={{ 
        headerShown: true,
        title: 'แก้ไขข้อมูลส่วนตัว',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='EditPassword' component={EditPassword} options={{ 
        headerShown: true,
        title: 'เปลี่ยนรหัสผ่าน',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
          <Stack.Screen name='Risk' component={Risk} options={{ 
        headerShown: true,
        title: 'ความเสี่ยงของการเกิดโรค',
          headerStyle: {
          backgroundColor: '#cf70ff'
          }}}/>
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}