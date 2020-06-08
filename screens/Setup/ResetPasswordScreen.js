import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

import { NanumText } from '../../components/StyledText';

import * as firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6674DE',
    paddingTop: '15%',
  },
  headerText: {
    fontFamily: 'jua',
    fontSize: 50,
    color: 'white',
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
    marginRight: '52.5%',
    color: 'white',
  },
  inputBar: {
    width: '80%',
    height: 40,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'white',
    color: '#6674DE',
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    backgroundColor: '#F0895F',
    width: '80%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
  },
  resetBtn: {
    backgroundColor: '#6674DE',
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
    color: 'white',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  resetText: {
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'underline',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  spacer: {
    marginTop: '10%',
  },
  successMessage:{
    position: 'absolute', 
    backgroundColor: '#8AE8F9', 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',           
    height: 60, 
    top: 35,
  },
  failureMessage:{
    position: 'absolute', 
    backgroundColor: 'crimson', 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',           
    height: 60, 
    top: 35,
  },
});

export default function ResetPassword({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [successEmailMessage, setSuccessEmailMessage] = React.useState(false);
  const [failureEmailMessage, setFailureEmailMessage] = React.useState(false);

  const logIn = () => {
    navigation.navigate('Login');
  };

  const resetPassword = () => {
    if (email === '') {
      Alert.alert(
        'Invalid Email',
        'Please enter the email address associated with your account',
        [
          { text: 'Return to Reset Password' }
        ]
      );
    } else {
      firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        setSuccessEmailMessage(true);
        setTimeout(() => {
          setSuccessEmailMessage(false);
        }, 2000);
      })
      .catch(() => {
        setFailureEmailMessage(true);
        setTimeout(() => {
          setFailureEmailMessage(false);
        }, 2000);
      })
    }
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
          autoCapitalize='none'
          clearButtonMode='while-editing'
          selectionColor='#6674DE'
          returnKeyType='next'
          onChangeText={text => setEmail(text)}
          value={email} />
      </View>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={resetPassword} style={styles.btn}>
        <NanumText style={styles.btnText}>Reset Password</NanumText>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={logIn} style={styles.resetBtn}>
        <NanumText style={styles.resetText}>Back to Login</NanumText>
      </TouchableOpacity>
      {successEmailMessage ? (
        <View style={styles.successMessage}>
          <NanumText style={{color:'#6674DE'}}>Password reset email sent to {email}!</NanumText>
        </View>
      ) : null}
      {failureEmailMessage ? (
        <View style={styles.failureMessage}>
          <NanumText style={{color:'white'}}>No account matching {email} - please enter a valid email address</NanumText>
        </View>
      ) : null}
    </View>
  );
};