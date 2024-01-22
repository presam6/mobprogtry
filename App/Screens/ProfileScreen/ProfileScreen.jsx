import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function ProfileScreen(navigation) {
  const { user, signOut } = useUser();
  const handleLogout = () => {
    signOut().then(() => {
      navigation.navigate('Login');
    });
  };
  const profileMenu = [
    {
      id: 1,
      name: 'Home',
      icon: 'home',
    },
    {
      id: 2,
      name: 'My Booking',
      icon: 'bookmark-sharp'
    },
    {
      id: 3,
      name: 'Contact Us',
      icon: 'mail'
    },
    {
      id: 4,
      name: 'Logout',
      icon: 'log-out',
      onPress: handleLogout
    },
  ]
  return (
    <View>

      <View style={{ padding: 20, paddingTop: 30, backgroundColor: Colors.PRIMARY, marginTop: 10 }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 30, color: Colors.WHITE
        }}>Profile</Text>

        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, }}>
          <Image source={{ uri: user.imageUrl }}
            style={{ width: 90, height: 90, borderRadius: 99, borderWidth: 1, borderColor: Colors.LIGHT_PRIMARY, }} />

          <Text style={{ fontSize: 25, fontFamily: 'outfit-medium', color: Colors.WHITE, marginTop: 10, textAlign: 'center' }}>
            {user.fullName} </Text>

          <Text style={{ fontSize: 20, fontFamily: 'outfit-medium', color: Colors.WHITE, marginTop: 10 }}>
            {user?.primaryEmailAddress.emailAddress} </Text>
        </View>

      </View>

      <View style={{ padding: 60 }}>
        <FlatList
          data={profileMenu}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={{
              display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 20,
              paddingHorizontal: 45
            }} onPress={item.onPress}>
              <Ionicons name={item.icon} size={35} color={Colors.PRIMARY} />
              <Text style={{ fontFamily: 'outfit', fontSize: 20, }}> {item.name} </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}