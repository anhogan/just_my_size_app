import * as React from 'react';
import { AsyncStorage, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { NanumText } from '../../components/StyledText';

import SignUp from './SignUpScreen';
import Login from './LoginScreen';

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

const Stack = createStackNavigator();

export default function FirstOpen({ navigation }) {
  const signUp = () => {
    navigation.navigate('SignUp');
    console.log('Sign Up for Just My Size');
  };

  const logIn = () => {
    navigation.navigate('LogIn');
    console.log('Login to Just My Size');
  };

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>

      <View style={styles.container}>
        <Text style={styles.headerText}>JUST MY SIZE</Text>
        <Image source={require('../../assets/images/jms_icon.png')} style={styles.image} />
        <TouchableOpacity onPress={signUp} style={styles.signUpBtn}>
          <NanumText style={styles.signUpText}>SIGN UP</NanumText>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
        <TouchableOpacity onPress={logIn} style={styles.logInBtn}>
          <NanumText style={styles.loginText}>Login</NanumText>
        </TouchableOpacity>
        </View>
      </View>
    </>
  );
};