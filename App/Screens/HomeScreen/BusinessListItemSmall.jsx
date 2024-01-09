import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function BusinessListItemSmall({ business }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: business.image[0]?.url }}
                style={styles.businessImage}
            />
            <View style={styles.infoContainer}>
                <Text style={{ fontSize: 15, fontFamily: 'outfit-medium', marginTop: 5,}}>
                    {business?.name}
                </Text>
                <Text style={{ fontSize: 13, fontFamily: 'outfit', marginTop: 5, color: Colors.GRAY}}>
                    {business?.contactPerson}
                </Text>
                <Text style={{ fontSize: 10, padding: 2, marginHorizontal: 2, fontFamily: 'outfit', alignSelf: 'flex-start', borderRadius: 3, backgroundColor: Colors.LIGHT_PRIMARY, color: Colors.PRIMARY}}>
                    {business?.category.name}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 3,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
    },
    infoContainer:{
        padding: 2,
        display: 'flex',
        gap: 2,
    },
    businessImage: {
        width: 200,
        height: 100,
        borderRadius: 10,
    }
})