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
  subHeaderText: {
    fontFamily: 'jua',
    fontSize: 30,
    color: '#F0895F',
    marginLeft: 'auto',
    marginRight: 'auto',
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

export default function SignUp({ navigation }) {
  const signUp = () => {
    navigation.navigate('NameCloset');
    console.log('Sign Up for Just My Size');
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>JUST MY SIZE</Text>
        <Text style={styles.subHeaderText}>SIGN UP</Text>
        <TouchableOpacity onPress={signUp} style={styles.signUpBtn}>
          <NanumText style={styles.signUpText}>Sign Up with Google</NanumText>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
        <TouchableOpacity onPress={signUp} style={styles.logInBtn}>
          <NanumText style={styles.loginText}>Sign Up</NanumText>
        </TouchableOpacity>
        </View>
      </View>
    </>
  );
};