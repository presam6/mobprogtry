import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState, } from 'react'
import GlobalAPI from '../../Utils/GlobalAPI'

const calculateDistance = (lat1, lon1, lat2, lon2) => {
    // Haversine formula to calculate distance between two coordinates
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance.toFixed(2); // Number of decimals
  };

export default function Slider() {

    const [slider, setSlider] = useState([]);
    useEffect(() => {
        getSliders();
    }, [])

    const getSliders = () => {
        GlobalAPI.getSlider().then(resp => {
            console.log("resp", resp.sliders);
            setSlider(resp?.sliders);
        })
    }
    return (
        <View>
            <Text style={styles.heading}>Popular Stores Near You</Text>
            <FlatList
                data={slider}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{marginRight: 10,}}>
                        <Image source={{uri: item?.image?.url}}
                        style={styles.sliderImages}
                        />
                        <Text style={{fontSize: 15, fontFamily: 'outfit', textAlign: 'center'}}>
                            {item?.name} 
                        </Text>
                        <Text style={{ fontSize: 12, fontFamily: 'outfit', textAlign: 'center', color: 'gray' }}>
                            {calculateDistance(1.5, 1.5, item?.location?.latitude, item?.location?.longitude)} km away
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
        marginBottom: 10,
    },
    sliderImages:{
        width: 250,
        height: 150,
        borderRadius: 20,
        objectFit: 'contain',
    }
})