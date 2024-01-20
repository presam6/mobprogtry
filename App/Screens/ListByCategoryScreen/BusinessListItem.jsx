import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function BusinessListItem({ business }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: business?.image?.url }}
        style={styles.image}
      />
      <View style={styles.subContainer}>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 15}}> {business.name} </Text>
        <Text style={{ fontFamily: 'outfit', color: Colors.GRAY, fontSize: 12}}>
        <Ionicons name="person" size={12} color={Colors.PRIMARY} /> {business.contactPerson} </Text>
        <Text style={{ fontFamily: 'outfit', color: Colors.GRAY, fontSize: 12}}>
        <MaterialIcons name="alternate-email" size={12} color={Colors.PRIMARY} marginBottom={10} /> {business.email} </Text>
        <Text style={{ fontFamily: 'outfit', fontSize: 12, color: Colors.GRAY }}>
          <Ionicons name="location-sharp" size={15} color={Colors.PRIMARY} /> {business.address} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  subContainer: {
    display: 'flex',
    gap: 7,
  },
  image: {
    width: 100,
    height: 100,
    borderColor: Colors.BLACK,
    borderRadius: 15,
    backgroundColor: Colors.LIGHT_PRIMARY,
  },
})