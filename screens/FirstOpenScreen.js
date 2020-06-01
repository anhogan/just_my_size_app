import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { AsyncStorage, View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';

import { NanumText } from '../components/StyledText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 350,
    height: 350,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '50%'
  },
  signUpBtn: {
    backgroundColor: '#6674DE',
    width: '30%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
  },
  signUpText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginTop: 7.5,
  }
});

export default function FirstOpenScreen() {
  const signUp = () => {
    console.log('Sign Up for Just My Size');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/jms_splash.png')} style={styles.image} />
      <TouchableOpacity onPress={signUp} style={styles.signUpBtn}>
        <Text style={styles.signUpText}>SIGN UP</Text>
      </TouchableOpacity>
      {/* Need to set login path */}
      <Link to="/login">Login</Link>
    </View>
  );
};

