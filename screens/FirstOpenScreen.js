import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { AsyncStorage, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';

import { NanumText } from '../components/StyledText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontFamily: 'jua',
    fontSize: 50,
    color: '#6674DE',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '15%',
  },
  image: {
    width: 250,
    height: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '50%',
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
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  loginContainer: {
    marginTop: '5%',
  },
  logInBtn: {
    backgroundColor: 'white',
    width: '30%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 18,
    color: '#6674DE',
    textDecorationLine: 'underline',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});

export default function FirstOpenScreen() {
  const signUp = () => {
    console.log('Sign Up for Just My Size');
  };

  const logIn = () => {
    console.log('Login to Just My Size');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>JUST MY SIZE</Text>
      <Image source={require('../assets/images/jms_icon.png')} style={styles.image} />
      <TouchableOpacity onPress={signUp} style={styles.signUpBtn}>
        <NanumText style={styles.signUpText}>SIGN UP</NanumText>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
      <TouchableOpacity onPress={logIn} style={styles.logInBtn}>
        <NanumText style={styles.loginText}>Login</NanumText>
      </TouchableOpacity>
      </View>
    </View>
  );
};

