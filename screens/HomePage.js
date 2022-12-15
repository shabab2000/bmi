import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from './home/Home';
import Profile from './home/Profile';
import Notification from './home/Notification';
import Calculate from './home/Calculate';

const Tab = createBottomTabNavigator();

export default function HomePage() {
    return (
        <Tab.Navigator
        
        tabBarOptions={{
       activeTintColor: '#9932CC',
       //inactiveTintColor: 'lightgray',
       //activeBackgroundColor: '#24AA0F',
       //inactiveBackgroundColor: '#6CA15E',
       titleStyle:{ fontFamily:'noto' },
       labelStyle: { fontFamily:'noto' },
        //   style: {
        //         backgroundColor: '#6CA15E',
        //         paddingBottom: 3,
        //         fontFamily:'noto'
        //   }
    }}
        >
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                
                title: 'หน้าแรก',
                headerShown: true,
                tabBarLabel: 'หน้าแรก',
                headerTitleStyle: {
                    fontFamily:'noto'
                },
                headerStyle: {
                    backgroundColor: '#cf70ff',
                },
                tabBarIcon: ({ color , size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                )
            }}
            
            />
            <Tab.Screen
            name="Calculate"
            component={Calculate}
            options={{
                title: 'คำนวณ BMI',
                headerShown: true,
                tabBarLabel: 'คำนวณ BMI',
                headerTitleStyle: {
                    fontFamily:'noto'
                },
                headerStyle: {
                    backgroundColor: '#cf70ff',
                },
                tabBarIcon: ({ color , size }) => (
                    <MaterialCommunityIcons name="calculator" color={color} size={size} />
                )
            }}
            />
            {/* <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
                title: 'การแจ้งเตือน',
                headerShown: true,
                tabBarLabel: 'การแจ้งเตือน',
                headerTitleStyle: {
                    fontFamily:'noto'
                },
                headerStyle: {
                    backgroundColor: '#cf70ff',
                },
                tabBarIcon: ({ color , size }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={size} />
                )
            }}
            /> */}
            <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                title: 'โปรไฟล์',
                headerShown: true,
                tabBarLabel: 'โปรไฟล์',
                headerTitleStyle: {
                    fontFamily:'noto'
                },
                headerStyle: {
                    backgroundColor: '#cf70ff',
                },
                tabBarIcon: ({ color , size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                )
            }}
            />

        </Tab.Navigator>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
