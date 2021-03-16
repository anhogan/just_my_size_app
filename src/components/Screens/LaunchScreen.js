import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from '../../assets/styles/LaunchScreenStyles';
import { NanumText } from '../StyledText';

export default function Launch({ navigation }) {
  const signUp = () => {
    navigation.navigate('SignUp');
  };

  const logIn = () => {
    navigation.navigate('Login');
  };

  return (
    <>
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