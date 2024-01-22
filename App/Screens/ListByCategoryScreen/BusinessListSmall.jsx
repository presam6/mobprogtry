import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BusinessListSmall({ business, order }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push('business-detail', { business:business })}
    >
      <Image source={{ uri: business?.image?.url }} style={styles.image} />

      <View style={styles.subContainer}>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 15 }}>{business.name}</Text>

        <Text style={{ fontFamily: 'outfit', color: Colors.GRAY, fontSize: 12 }}>
          <Ionicons name="person" size={12} color={Colors.PRIMARY} /> {business.contactPerson}
        </Text>

        {order ? (
          <Text
            style={{
              padding: 5,
              borderRadius: 5,
              fontSize: 14,
              alignSelf: 'flex-start',
              backgroundColor: Colors.PRIMARY,
              color: Colors.LIGHT_PRIMARY,
            }}
          >
            {order.orderStatus}
          </Text>
        ) : null}

        {order ? (
          <Text style={{ fontFamily: 'outfit', color: Colors.GRAY, fontSize: 15 }}>
            {order.date} at {order.time}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
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
    alignItems: 'center',
  },
  subContainer: {
    display: 'flex',
    gap: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderColor: Colors.BLACK,
    borderRadius: 15,
    backgroundColor: Colors.LIGHT_PRIMARY,
  },
});
