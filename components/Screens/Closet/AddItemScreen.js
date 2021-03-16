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