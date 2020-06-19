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