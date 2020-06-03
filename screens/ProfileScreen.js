import * as React from 'react';
import * as firebase from 'firebase';

import { StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';

import { NanumText } from '../components/StyledText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#6674DE',
  },
  inputName: {
    marginTop: '10%',
    marginBottom: '2%',
    marginRight: '67.5%',
    color: '#6674DE',
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
  resetBtn: {
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
  updateBtn: {
    backgroundColor: '#6674DE',
    width: '80%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  logoutBtn: {
    backgroundColor: 'crimson',
    width: '80%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  spacer: {
    marginTop: '10%',
  },
});

export default function Profile() {
  const user = firebase.auth().currentUser;

  const [name, setName] = React.useState(user.displayName);
  const [emailAddress, setEmailAddress] = React.useState(user.email);

  const resetPassword = () => {
    console.log('Reset Password');
  };

  const updateProfile = () => {
    console.log('Update Profile');
  };

  const logout = () => {
    console.log('Logout');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <NanumText style={styles.inputName}>NAME</NanumText>
        <TextInput
          style={styles.inputBar}
          placeholder={name ? null : 'Enter your name'}
          autoCapitalize='none'
          clearButtonMode='while-editing'
          selectionColor='#6674DE'
          returnKeyType='done'
          onChangeText={text => setName(text)}
          value={name} />
        <NanumText style={styles.inputEmail}>EMAIL ADDRESS</NanumText>
        <TextInput
          style={styles.inputBar}
          textContentType='emailAddress'
          autoCapitalize='none'
          clearButtonMode='while-editing'
          selectionColor='#6674DE'
          returnKeyType='done'
          onChangeText={text => setEmailAddress(text)}
          value={emailAddress} />
      </View>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={resetPassword} style={styles.resetBtn}>
        <NanumText style={styles.btnText}>Change Your Password</NanumText>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={updateProfile} style={styles.updateBtn}>
        <NanumText style={styles.btnText}>Update Profile</NanumText>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
        <NanumText style={styles.btnText}>Logout</NanumText>
      </TouchableOpacity>
    </View>
  );
}

Profile.navigationOptions = {
  header: null,
};