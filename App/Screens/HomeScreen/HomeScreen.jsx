import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'

export default function HomeScreen() {
  return (
    <ScrollView>
      {/* Header */}
      <Header />
      <View style={{padding: 15,}}>
        <Slider />
        <Categories/>
        <BusinessList/>
      </View>
    </ScrollView>
  )
}