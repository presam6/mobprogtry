import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';
import BookingModal from './BookingModal';

export default function BusinessDetailScreen() {
  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business);
  const navigation = useNavigation();
  const [isReadMore, setIsReadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log(param?.business)
  }, [])

  return business && (
    <View>
      <ScrollView style={styles.container}>

        <TouchableOpacity style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <AntDesign name="back" size={30} color={Colors.LIGHT_PRIMARY} />
          <Text style={{ fontSize: 25, fontFamily: 'outfit-medium' }}></Text>
        </TouchableOpacity>

        <Image source={{ uri: business?.image[0]?.url }}
          style={{ width: '100%', height: 200 }}
        />


        <View style={styles.infoContainer}>

          <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}> {business?.name} </Text>
          <View style={styles.subContainer}>

            <Text style={{ fontFamily: 'outfit-medium', color: Colors.PRIMARY, fontSize: 15 }}>
              {business?.contactPerson}  🌟 </Text>
            <Text style={{ color: Colors.PRIMARY, backgroundColor: Colors.LIGHT_PRIMARY, padding: 5, borderRadius: 5, fontSize: 12, }}>
              {business?.category.name} </Text>
          </View>

          <Text style={{ fontSize: 12, fontFamily: 'outfit', color: Colors.GRAY }}> <Ionicons name="location-sharp" size={15} color={Colors.PRIMARY} /> {business?.address} </Text>

          {/* Horizontal Line */}
          <View style={{ borderWidth: 0.5, borderColor: Colors.GRAY, marginTop: 20, marginBottom: 20, }}></View>

          {/* About Section */}
          <View>
            <Heading text={'About'} />
            <Text style={{ fontFamily: 'outfit', lineHeight: 28, color: Colors.GRAY, fontSize: 15 }} numberOfLines={isReadMore ? 20 : 4}> {business?.about} </Text>
            <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
              <Text style={{ color: Colors.PRIMARY, fontSize: 13, fontFamily: 'outfit' }}>{isReadMore ? 'Read Less' : 'Read More'}</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

      <View style={{
        display: 'flex', flexDirection: 'row', margin: 8, gap: 8
      }}>
        <TouchableOpacity style={styles.messageBtn}>
          <Text style={{
            textAlign: 'center', color: Colors.PRIMARY, fontFamily: 'outfit-medium', fontSize: 18,
          }}> Message </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookBtn} onPress={() => setShowModal(true)}>
          <Text style={{
            textAlign: 'center', color: Colors.WHITE, fontFamily: 'outfit-medium', fontSize: 18,
          }}> Book Order </Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType='slide'
        visible={showModal}
      >
        <BookingModal 
        businessId = {business.id}
        hideModal={() => setShowModal(false)} />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: '88%',
  },
  backButton: {
    position: 'absolute',
    zIndex: 10,
    padding: 20,
  },
  infoContainer: {
    padding: 20,
    display: 'flex',
    gap: 10,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  messageBtn: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    flex: 1,
  },
  bookBtn: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    flex: 1,
  },
})