import * as React from 'react';
import * as firebase from 'firebase';

import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import { styles } from '../../assets/styles/SignUpScreenStyles';
import { NanumText } from '../StyledText';

export default function SignUp({ navigation }) {
  const database = firebase.database();

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

          return firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => {
            const user = firebase.auth().currentUser;

            database.ref('users/' + user.uid).set({
              email: email,
              name: " ",
              newUser: true,
              plan: 'Free',
              uid: user.uid,
              closet: [
                {
                  id: 1,
                  name: " ",
                  items: [
                    {
                      id: 0,
                      store: 'Just My Size',
                      type: 'App',
                      style: 'Yours',
                      size: 'The perfect one'
                    },
                  ]
                },
              ]
            });
          })
          .catch(err => {
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