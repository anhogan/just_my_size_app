import * as React from 'react';
import * as firebase from 'firebase';

import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../../../assets/styles/UpdateItemScreenStyles';
import { NanumText } from '../../components/StyledText';

export default function UpdateItem() {
  const database = firebase.database();
  const user = firebase.auth().currentUser;

  return (
    <View style={styles.container}>
      <NanumText>Update Closet Item Screen</NanumText>
    </View>
  );
};

UpdateItem.navigationOptions = {
  header: null,
};