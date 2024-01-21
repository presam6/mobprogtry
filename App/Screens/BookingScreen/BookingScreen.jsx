import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeading from '../../Components/PageHeading'
import GlobalAPI from '../../Utils/GlobalAPI'
import { useUser } from '@clerk/clerk-expo'
import Heading from '../../Components/Heading'
import BusinessListItem from '../ListByCategoryScreen/BusinessListItem'
import BusinessListSmall from '../ListByCategoryScreen/BusinessListSmall'

export default function BookingScreen() {

  const { user } = useUser();
  const [bookingList, setBookingList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && getUserOrders();
  }, [user])

  // Get user orders
  const getUserOrders = () => {
    setLoading(true)
    GlobalAPI.getUserOrders(user.primaryEmailAddress.emailAddress).then(resp => {
      setBookingList(resp.orders);
      setLoading(false)
    })
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{fontFamily: 'outfit-medium', 
      fontSize: 26,}} > My Orders </Text>

      <View>
        <FlatList 
        data={bookingList}
        onRefresh={getUserOrders}
        refreshing={loading}
        renderItem={({item, index}) => (
          <BusinessListItem 
          business={item?.businessList}
          order={item} 
          />
        )}
        />
      </View>
    </View>
  )
}