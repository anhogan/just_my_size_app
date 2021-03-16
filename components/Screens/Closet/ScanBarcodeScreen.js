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

// TODO: Part of Scan Barcode enhancement
export default function ScanBarcode() {
  const database = firebase.database();
  const user = firebase.auth().currentUser;

  return (
    <View style={styles.container}>
      <NanumText>Scan Barcode to Add Item Screen</NanumText>
    </View>
  );
};

ScanBarcode.navigationOptions = {
  header: null,
};