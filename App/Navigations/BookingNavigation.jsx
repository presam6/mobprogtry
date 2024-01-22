import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import BusinessDetailScreen from '../Screens/BusinessDetailScreen/BusinessDetailScreen';

const Stack = createStackNavigator();

export default function BookingNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name='booking' component={BookingScreen}/>
            <Stack.Screen name='business-detail' component={BusinessDetailScreen}/>

        </Stack.Navigator>
    );
}