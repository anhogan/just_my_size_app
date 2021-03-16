import * as React from 'react';
import * as firebase from 'firebase';

import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../../../assets/styles/AddItemScreenStyles';
import { NanumText } from '../../components/StyledText';

export default function AddItem() {
  const database = firebase.database();
  const user = firebase.auth().currentUser;

  return (
    <View style={styles.container}>
      <NanumText>Add Closet Item Screen</NanumText>
    </View>
  );
};

AddItem.navigationOptions = {
  header: null,
};