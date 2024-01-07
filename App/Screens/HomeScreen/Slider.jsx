import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPI from '../../Utils/GlobalAPI'

export default function Slider() {

    const [slider, setSlider] = useState();
    useEffect(()=>{
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
      <Text>Slider</Text>
    </View>
  )
}