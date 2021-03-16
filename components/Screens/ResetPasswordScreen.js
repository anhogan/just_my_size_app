import * as React from 'react';
import * as firebase from 'firebase';

import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';

import { styles } from '../../assets/styles/ResetPasswordStyles';
import { NanumText } from '../StyledText';

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
        }, 5000);
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
          <NanumText style={{ color:'#6674DE' }}>Password reset email sent to {email}!</NanumText>
        </View>
      ) : null}
      {failureEmailMessage ? (
        <View style={styles.failureMessage}>
          <NanumText style={{ color:'white' }}>No account matching {email}. Please enter a valid email address</NanumText>
        </View>
      ) : null}
    </View>
  );
};