import * as React from 'react';
import * as firebase from 'firebase';

import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../../../assets/styles/UpdateClosetScreenStyles';
import { NanumText } from '../../components/StyledText';

export default function UpdateCloset() {
  const database = firebase.database();
  const user = firebase.auth().currentUser;

  return (
    <View style={styles.container}>
      <NanumText>Update Closet Name Screen</NanumText>
    </View>
  );
};

UpdateCloset.navigationOptions = {
  header: null,
};