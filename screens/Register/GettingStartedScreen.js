import * as React from 'react';
import * as firebase from 'firebase';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { UserConsumer } from '../../contexts/UserContext';
import { NanumText } from '../../components/StyledText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
  closetTips: {
    fontFamily: 'jua',
    fontSize: 24,
    color: '#F0895F',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
    marginBottom: '5%',
  },
  closetBtn: {
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
  closetText: {
    fontSize: 20,
    color: '#6674DE',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  tipContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: '10%',
    marginTop: 10,
    marginBottom: 10,
  },
  tipText: {
    fontSize: 16,
    color: 'white',
    marginTop: '1%',
    marginLeft: '5%',
  },
  spacer: {
    marginTop: '10%',
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

export default function GettingStarted() {
  const database = firebase.database();
  const user = firebase.auth().currentUser;

  const finish = () => {
    database.ref('users/' + user.uid).update({
      newUser: false
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>JUST MY SIZE</Text>
      <Text style={styles.subHeaderText}>WELCOME</Text>
      <NanumText style={styles.perfectText}>The perfect fit every time</NanumText>
      <NanumText style={styles.setupText}>Congratulations, your account is now setup!</NanumText>
      <Text style={styles.closetTips}>Closet Management Tips</Text>
      <View style={styles.tipContainer}>
        <MaterialCommunityIcons name="hanger" size={24} color='white' />
        <NanumText style={styles.tipText}>Scan a barcode to quickly add an item</NanumText>
      </View>
      <View style={styles.tipContainer}>
        <MaterialCommunityIcons name="hanger" size={24} color='white' />
        <NanumText style={styles.tipText}>Edit items for up-tp-date sizing</NanumText>
      </View>
      <View style={styles.tipContainer}>
        <MaterialCommunityIcons name="hanger" size={24} color='white' />
        <NanumText style={styles.tipText}>Delete old items to keep your closet in style</NanumText>
      </View>
      <View style={styles.tipContainer}>
        <MaterialCommunityIcons name="hanger" size={24} color='white' />
        <NanumText style={styles.tipText}>Search to easily find closet items</NanumText>
      </View>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={finish} style={styles.closetBtn}>
        <NanumText style={styles.closetText}>To My Closet</NanumText>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
      <View style={styles.progressContainer}>
        <FontAwesome name="circle" size={20} color="#F0895F" />
        <FontAwesome name="circle" size={20} color="#F0895F" />
        <FontAwesome name="circle" size={20} color="white" />
      </View>
    </View>
  );
};