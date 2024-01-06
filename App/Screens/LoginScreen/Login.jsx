import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import Colors from '../../Utils/Colors'
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={require('./../../../assets/images/loginImage.png')}
        style={styles.loginImage}
      />

      <View style={styles.subContainer}>
        <Text style={{ fontSize: 25, color: Colors.WHITE, textAlign: 'center', marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>Search your item</Text> and
          <Text style={{ fontWeight: 'bold' }}> Find your store</Text> efficiently
        </Text>

        <Text style={{ fontSize: 15, color: Colors.WHITE, marginTop: 20, textAlign: 'center' }}>
          FindCraft, the best mobile application to boost your shopping experience to the next level!
        </Text>
        <Text style={{ fontSize: 15, color: Colors.WHITE, marginTop: 20, textAlign: 'center' }}>
          Enable customers to save time, and streamline their choices!
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{ textAlign: 'center', color: Colors.PRIMARY, fontSize: 17, }}>
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginImage: {
    width: 200,
    height: 400,
    marginTop: 50,
    borderWidth: 4,
    borderRadius: 15,
    borderColor: Colors.BLACK,
  },
  subContainer: {
    width: '112.4%',
    backgroundColor: Colors.PRIMARY,
    height: '70%',
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 25,
  }
})