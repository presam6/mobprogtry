import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { Feather } from '@expo/vector-icons';
export default function Header() {

    const { user, isLoading } = useUser();
    return user && (
        <View style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileMainContainer}>

                <View style={styles.profileContainer}>
                    <Image source={{ uri: user?.imageUrl }}
                        style={styles.userImage} />
                    <View>
                        <Text style={{ color: Colors.WHITE }}>Welcome, </Text>
                        <Text style={{ color: Colors.WHITE, fontSize: 17 }}>{user?.fullName}</Text>
                    </View>
                </View>
                <Feather name="book" size={24} color="white" />
            </View>

            {/* Search Bar Section */}
            <View style={styles.searchBarContainer}>
                <TextInput placeholder='Find your Item' style={styles.textInput}/>
                <Feather name="search" style={styles.searchBTN} size={24} color={Colors.PRIMARY} />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    // Main Container Styling
    container: {
        marginTop: 10,
        padding: 10,
        paddingTop: 25,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    // Profile Container Styling
    profileMainContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between' 
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 99,
        borderColor: Colors.BLACK,
    },
    // Search Bar Styling
    textInput:{
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        width: '85%',
        fontSize: 16,
        textAlign: 'center'
    },
    searchBarContainer:{
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5,
        marginBottom: 10,
    },
    searchBTN:{
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 8,
    },
})