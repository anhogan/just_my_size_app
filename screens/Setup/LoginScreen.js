import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { NanumText } from '../../components/StyledText';

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
  googleBtn: {
    backgroundColor: '#6674DE',
    width: '30%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
  },
  googleText: {
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

export default function Login({ navigation }) {
  const logIn = () => {
    navigation.navigate('Root');
    console.log('Login to Just My Size');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>JUST MY SIZE</Text>
      <TouchableOpacity onPress={logIn} style={styles.signUpBtn}>
        <NanumText style={styles.signUpText}>Login with Google</NanumText>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
      <TouchableOpacity onPress={logIn} style={styles.logInBtn}>
        <NanumText style={styles.loginText}>Login</NanumText>
      </TouchableOpacity>
      </View>
    </View>
  );
};