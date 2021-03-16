import * as React from 'react';
import * as firebase from 'firebase';

import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../../../assets/styles/ScanBarcodeScreenStyles';
import { NanumText } from '../../../components/StyledText';

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