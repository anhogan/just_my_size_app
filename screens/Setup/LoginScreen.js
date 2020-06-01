import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

import { NanumText } from '../../components/StyledText';
import { FontAwesome5 } from '@expo/vector-icons';

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
    marginBottom: '10%',
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  inputEmail: {
    marginTop: '10%',
    marginBottom: '2%',
    marginRight: '52.5%'
  },
  inputPassword: {
    marginTop: '10%',
    marginBottom: '2%',
    marginRight: '60%'
  },
  inputBar: {
    width: '80%',
    height: 40,
    borderColor: '#6674DE',
    borderWidth: 2,
    borderRadius: 5,
    color: '#6674DE',
    paddingLeft: 15,
    paddingRight: 15,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: '2%'
  },
  btn: {
    backgroundColor: '#8AE8F9',
    width: '80%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center"
  },
  googleBtn: {
    backgroundColor: '#6674DE',
    width: '80%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  resetBtn: {
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
  btnText: {
    fontSize: 20,
    color: '#6674DE',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  googleBtnText: {
    fontSize: 20,
    color: '#8AE8F9',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  resetText: {
    fontSize: 16,
    color: '#6674DE',
    textDecorationLine: 'underline',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  spacer: {
    marginTop: '10%',
  },
  icon: {
    color: "white",
    fontSize: 24,
    marginTop: 'auto',
    marginBottom: 'auto',
  }
});

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const logIn = () => {
    if (email.length < 1 || !email.includes('@') || password.length < 1) {
      Alert.alert(
        'Invalid Credentials',
        'The email and / or password entered do not match a current account.',
        [
          { text: 'Try Again', onPress: () => console.log('Trying again') }
        ]
      )
    } else {
      navigation.navigate('Root');
    };

    setEmail('');
    setPassword('');
  };

  const resetPassword = () => {
    // Setup Root nested navigation routes
    // navigation.navigate(NESTED NAV TO RESET PASSWORD SCREEN)
    // Email option for reset via Firebase?
    console.log('Reset your password');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>JUST MY SIZE</Text>
      <Text style={styles.subHeaderText}>LOGIN</Text>
      <View style={styles.inputContainer}>
        <NanumText style={styles.inputEmail}>EMAIL ADDRESS</NanumText>
        <TextInput
          style={styles.inputBar}
          placeholder='Enter your email address'
          textContentType='emailAddress'
          clearButtonMode='while-editing'
          selectionColor='#6674DE'
          onChangeText={text => setEmail(text)}
          value={email} />
        <NanumText style={styles.inputPassword}>PASSWORD</NanumText>
        <TextInput
          style={styles.inputBar}
          placeholder='Enter your password'
          textContentType='password'
          secureTextEntry={true}
          clearButtonMode='while-editing'
          selectionColor='#6674DE'
          onChangeText={text => setPassword(text)}
          value={password} />
      </View>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={logIn} style={styles.btn}>
        <NanumText style={styles.btnText}>Login</NanumText>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={logIn} style={styles.googleBtn}>
        <NanumText style={styles.googleBtnText}><FontAwesome5 name="google" style={styles.icon} /></NanumText>
        <NanumText style={styles.googleBtnText}>Login with Google</NanumText>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={resetPassword} style={styles.resetBtn}>
        <NanumText style={styles.resetText}>Reset Password</NanumText>
      </TouchableOpacity>
    </View>
  );
};