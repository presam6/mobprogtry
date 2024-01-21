import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function BusinessListSmall({ business }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: business?.images[0]?.url }}
                style={styles.image}
            />

            <View style={styles.infoContainer}>
                <Text style={{ fontSize: 17, fontFamily: 'outfit-medium' }}> {business?.name} </Text>
                <Text style={{ fontSize: 13, fontFamily: 'outfit', color: Colors.GRAY }}> {business?.contactPerson} </Text>
                <Text style={{
                    fontSize: 10, fontFamily: 'outfit', padding: 3,
                    color: Colors.PRIMARY, backgroundColor: Colors.LIGHT_PRIMARY,
                    borderRadius: 3, alignSelf: 'flex-start', paddingHorizontal: 7,
                }}>
                    {business?.category.name} </Text>
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
    image: {
        width: 100,
        height: 100,
        borderColor: Colors.BLACK,
        borderRadius: 15,
        backgroundColor: Colors.LIGHT_PRIMARY,
    }
})