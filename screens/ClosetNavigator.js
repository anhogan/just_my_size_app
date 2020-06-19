import * as React from 'react';
import * as firebase from 'firebase';

import { createStackNavigator } from '@react-navigation/stack';

import Closet from './Closet/ClosetScreen';
import AddItem from './Closet/AddItemScreen';
import ScanBarcode from './Closet/ScanBarcodeScreen';
import UpdateItem from './Closet/UpdateItemScreen';
import AddCloset from './Closet/AddClosetScreen';
import UpdateCloset from './Closet/UpdateClosetScreen';

const Stack = createStackNavigator();

export default function ClosetNavigator() {
  return (
    <Stack.Navigator initialRouteName="Closet" headerMode='none'>
      <Stack.Screen name="Closet" component={Closet} />
      <Stack.Screen name="AddItem" component={AddItem} />
      <Stack.Screen name="ScanBarcode" component={ScanBarcode} />
      <Stack.Screen name="UpdateItem" component={UpdateItem} />
      <Stack.Screen name="AddCloset" component={AddCloset} />
      <Stack.Screen name="UpdateCloset" component={UpdateCloset} />
    </Stack.Navigator>
  );
};