import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import Colors from '../Utils/Colors';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarInactiveTintColor: Colors.BLACK,
        }}>
            <Tab.Screen name='HOME' component={HomeScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{
                            color:color, fontSize: 12, fontWeight: "bold", marginTop: -7,
                        }}>Home</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen name='BOOKING' component={BookingScreen} options={{
                tabBarLabel: ({ color }) => (
                    <Text style={{
                        color:color, fontSize: 12, fontWeight: "bold", marginTop: -7,
                    }}>Booking</Text>
                ),
                tabBarIcon: ({ color, size }) => (
                    <Feather name="book" size={size} color={color} />
                )
            }} />

            <Tab.Screen name='PROFILE' component={ProfileScreen}  options={{
            tabBarLabel: ({ color }) => (
                <Text style={{
                    color:color, fontSize: 12, fontWeight: "bold", marginTop: -7,
                }}>Profile</Text>
            ),
            tabBarIcon:({color, size})=>(
                <FontAwesome  name="user-circle-o" size={size} color={color} />
            )
        }}/>
        </Tab.Navigator>
    )
}