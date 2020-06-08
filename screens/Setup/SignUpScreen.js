import * as React from 'react';
import * as firebase from 'firebase';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import { UserConsumer } from '../../contexts/UserContext';
import { NanumText } from '../../components/StyledText';

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
  inputPassword: {
    marginTop: '10%',
    marginBottom: '2%',
    marginRight: '60%',
    color: 'white',
  },
  inputConfirmPassword: {
    marginTop: '10%',
    marginBottom: '2%',
    marginRight: '45%',
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
  loginBtn: {
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
  loginText: {
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'underline',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  spacer: {
    marginTop: '10%',
  },
});

export default function SignUp({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const signUp = () => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegex.test(email) && password === confirmPassword) {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          setEmail('');
          setPassword('');
          setConfirmPassword('');

          return firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
            if (err.code.includes('email-already-in-use')) {
              Alert.alert(
                'Invalid Email Address',
                'Email address already in use',
                [
                  { text: 'Return to Sign Up' }
                ]
              )
            };
          });
        })
        .catch(err => {
          console.log(err.code, err.message)
        });
    } else {
      Alert.alert(
        'Invalid Credentials',
        'Please enter a valid email address and confirm that both passwords match exactly',
        [
          { text: 'Return to Sign Up' }
        ]
      )
    }
  };

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