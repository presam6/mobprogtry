import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState, } from 'react'
import GlobalAPI from '../../Utils/GlobalAPI'
import Heading from '../../Components/Heading';
import * as Location from 'expo-location';

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
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);


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
            <Heading text={"Popular Stores Near You"} />
            <FlatList
                data={slider}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 10, }}>
                        <Image source={{ uri: item?.image?.url }}
                            style={styles.sliderImages}
                        />
                        <Text style={{ fontSize: 15, fontFamily: 'outfit', textAlign: 'center', marginTop: 5, }}>
                            {item?.name} <Text> </Text>
                            <Text style={{ fontSize: 13, fontFamily: 'outfit', textAlign: 'center', color: 'gray' }}>
                                {calculateDistance(1.5, 1.5, item?.location?.latitude, item?.location?.longitude)} M away
                            </Text>
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sliderImages: {
        width: 210,
        height: 120,
        borderRadius: 20,
        objectFit: 'contain',
    }
})