import * as React from 'react';
import * as firebase from 'firebase';

import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import { NanumText } from '../../StyledText';
import { FontAwesome } from '@expo/vector-icons';

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
  perfectText: {
    fontSize: 24,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
  },
  setupText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  inputFive: {
    marginTop: '2%',
    marginBottom: '2%',
    marginRight: '70%',
    color: 'white',
  },
  inputFour: {
    marginTop: '2%',
    marginBottom: '2%',
    marginRight: '72.5%',
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
    backgroundColor: '#8AE8F9',
    width: '80%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
  },
  skipBtn: {
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
    color: '#6674DE',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  skipBtnText: {
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'underline',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  spacer: {
    marginTop: '5%',
  },
  progressContainer: {
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default function AddFirstItem({ navigation }) {
  const database = firebase.database();
  const user = firebase.auth().currentUser;

  const [store, setStore] = React.useState('');
  const [type, setType] = React.useState('');
  const [style, setStyle] = React.useState('');
  const [size, setSize] = React.useState('');

  const next = () => {
    navigation.navigate('GettingStarted');
  };

  const skip = () => {
    database.ref('users/' + user.uid).update({
      newUser: false
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>JUST MY SIZE</Text>
      <Text style={styles.subHeaderText}>WELCOME</Text>
      <NanumText style={styles.perfectText}>The perfect fit every time</NanumText>
      <NanumText style={styles.setupText}>Add your first item!</NanumText>
      <View style={styles.inputContainer}>
          <NanumText style={styles.inputFive}>STORE</NanumText>
          <TextInput
            style={styles.inputBar}
            placeholder='Enter the store name'
            clearButtonMode='while-editing'
            selectionColor='#6674DE'
            returnKeyType='next'
            onChangeText={text => setStore(text)}
            value={store} />
          <NanumText style={styles.inputFive}>TYPE</NanumText>
          <TextInput
            style={styles.inputBar}
            placeholder='Jeans, Sneakers, etc.'
            clearButtonMode='while-editing'
            selectionColor='#6674DE'
            returnKeyType='next'
            onChangeText={text => setType(text)}
            value={type} />
          <NanumText style={styles.inputFive}>STYLE</NanumText>
          <TextInput
            style={styles.inputBar}
            placeholder='High-Waisted Jeggings, AirMax, etc.'
            clearButtonMode='while-editing'
            selectionColor='#6674DE'
            returnKeyType='next'
            onChangeText={text => setStyle(text)}
            value={style} />
          <NanumText style={styles.inputFour}>SIZE</NanumText>
          <TextInput
            style={styles.inputBar}
            placeholder='Enter your size'
            clearButtonMode='while-editing'
            selectionColor='#6674DE'
            returnKeyType='done'
            onChangeText={text => setSize(text)}
            value={size} />
        </View>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={next} style={styles.btn}>
          <NanumText style={styles.btnText}>Next</NanumText>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={skip} style={styles.skipBtn}>
        <NanumText style={styles.skipBtnText}>Skip</NanumText>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
      <View style={styles.progressContainer}>
        <FontAwesome name="circle" size={20} color="#F0895F" />
        <FontAwesome name="circle" size={20} color="white" />
        <FontAwesome name="circle" size={20} color="#F0895F" />
      </View>
    </View>
  );
};