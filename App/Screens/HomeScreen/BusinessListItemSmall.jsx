import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function BusinessListItemSmall({ business }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: business.image[0]?.url }}
                style={styles.businessImage}
            />
            <View>
                <Text style={{ fontSize: 15, fontFamily: 'outfit-medium', textAlign: 'center', marginTop: 5,}}>
                    {business?.name}
                </Text>
                <Text style={{ fontSize: 13, fontFamily: 'outfit', textAlign: 'center', marginTop: 5,}}>
                    {business?.contactPerson}
                </Text>
                <Text style={{ fontSize: 12, fontFamily: 'outfit', textAlign: 'center', marginTop: 3,}}>
                    {business?.category.name}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: Colors.LIGHT_GRAY,
        borderRadius: 10,
    },
    businessImage: {
        width: 200,
        height: 100,
        borderRadius: 10,
    }
})