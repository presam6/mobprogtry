import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import Colors from '../Utils/Colors';


export default function PageHeading({title}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{
            display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'
          }}
            onPress={() => navigation.goBack()}>
            <AntDesign name="back" size={30} color="black" />
            <Text style={{ fontSize: 25, fontFamily: 'outfit-medium' }}> {title} </Text>
          </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        zIndex: 10,
        padding: 20,
      },
})