import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPI from '../../Utils/GlobalAPI'
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getCategories();
  }, [])
  const getCategories = () => {
    GlobalAPI.getCategories().then(resp => {
      setCategories(resp?.categories);
    })
  }
  return (
    <View>
      <Heading text={'Categories'} isViewAll={false} />
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ item, index }) => index <=3 &&(
          <TouchableOpacity style={styles.container} onPress={() => navigation.push('business-list', {
            category:item.name
          })}>
            <View style={styles.iconContainer}>
              <Image source={{ uri: item?.icon?.url }}
                style={{ width: 30, height: 35 }}
              />
            </View>
            <Text style={{fontFamily: 'outfit-medium', textAlign: 'center', fontSize: 12, marginTop: 5}}>
               {item?.name} </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  iconContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 10,
    padding: 3,
    borderRadius: 99,
  },
})