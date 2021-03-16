import * as React from 'react';
import * as firebase from 'firebase';

import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../../../assets/styles/AddClosetScreenStyles';
import { NanumText } from '../../components/StyledText';

// TODO: Part of Stylist enhancement
export default function AddCloset() {
  const database = firebase.database();
  const user = firebase.auth().currentUser;

  return (
    <View style={styles.container}>
      <NanumText>Add Closet Name Screen</NanumText>
    </View>
  );
};

AddCloset.navigationOptions = {
  header: null,
};