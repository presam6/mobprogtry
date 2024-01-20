import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import GlobalAPI from '../../Utils/GlobalAPI';
import BusinessListItem from './BusinessListItem';
import Colors from '../../Utils/Colors';
import PageHeading from '../../Components/PageHeading';

export default function ListByCategoryScreen() {
  const param = useRoute().params;

  const navigation = useNavigation();

  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    console.log("Category", param.category)
    param && getBusinessByCategory()
  }, [param])

  const getBusinessByCategory = () => {
    GlobalAPI.getBusinessListByCategory(param.category)
      .then(resp => {
        console.log(resp.businessLists);
        setBusinessList(resp.businessLists);
      })
  }
  return (
    <View style={{ padding: 20, paddingTop: 40 }}>

      <PageHeading title={param.category} />

      {businessList?.length > 0 ? <FlatList
        data={businessList}
        renderItem={({ item, index }) => (
          <BusinessListItem business={item} />
        )}
      /> :
        <Text style={{
          fontFamily: 'outfit-medium', fontSize: 20, textAlign: 'center', marginTop: '20%',
          color: Colors.GRAY
        }}> No Business Found </Text>}
    </View>
  )
}

const styles = StyleSheet.create({

})