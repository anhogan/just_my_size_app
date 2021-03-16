import * as React from 'react';
import * as firebase from 'firebase';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from '../../assets/styles/SignUpScreenStyles';
import { NanumText } from '../StyledText';

import useSignUp from '../../hooks/useSignUp';

export default function SignUp({ navigation }) {
  const database = firebase.database();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const signUp = useSignUp(email, setEmail, password, setPassword, confirmPassword, setConfirmPassword)

  const login = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>JUST MY SIZE</Text>
      <Text style={styles.subHeaderText}>SIGN UP</Text>
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
        <NanumText style={styles.inputPassword}>PASSWORD</NanumText>
        <TextInput
          style={styles.inputBar}
          placeholder='Enter your password (Min. 6 characters)'
          textContentType='password'
          secureTextEntry={true}
          clearButtonMode='while-editing'
          selectionColor='#6674DE'
          returnKeyType='next'
          onChangeText={text => setPassword(text)}
          value={password} />
        <NanumText style={styles.inputConfirmPassword}>CONFIRM PASSWORD</NanumText>
        <TextInput
          style={styles.inputBar}
          placeholder='Enter your password'
          textContentType='password'
          secureTextEntry={true}
          clearButtonMode='while-editing'
          selectionColor='#6674DE'
          returnKeyType='done'
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword} />
      </View>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={signUp} style={styles.btn}>
        <NanumText style={styles.btnText}>Sign Up</NanumText>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={login} style={styles.loginBtn}>
        <NanumText style={styles.loginText}>Login</NanumText>
      </TouchableOpacity>
    </View>
  );
};