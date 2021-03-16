import * as React from 'react';
import * as firebase from 'firebase';

import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NanumText } from '../../components/StyledText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});

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