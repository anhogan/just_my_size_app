import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { NanumText } from '../../components/StyledText';

import NameCloset from '../Register/NameClosetScreen';
import AddFirstItem from '../Register/AddFirstItemScreen';
import GettingStarted from '../Register/GettingStartedScreen';

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

export default function SignUp({ navigation }) {
  const googleSignUp = () => {
    console.log('Sign Up with Google for Just My Size');
  };

  const signUp = () => {
    console.log('Sign Up for Just My Size');
  };

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="NameCloset" component={NameCloset} />
        <Stack.Screen name="AddFirstItem" component={AddFirstItem} />
        <Stack.Screen name="GettingStarted" component={GettingStarted} />
      </Stack.Navigator>

      <View style={styles.container}>
        <Text style={styles.headerText}>JUST MY SIZE</Text>
        <TouchableOpacity onPress={googleSignUp} style={styles.signUpBtn}>
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