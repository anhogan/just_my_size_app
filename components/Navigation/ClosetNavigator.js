import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Closet from '../Screens/Closet/ClosetScreen';
import AddItem from '../Screens/Closet/AddItemScreen';
import UpdateItem from '../Screens/Closet/UpdateItemScreen';
import UpdateCloset from '../Screens/Closet/UpdateClosetScreen';

const Stack = createStackNavigator();

export default function ClosetNavigator() {
  return (
    <Stack.Navigator initialRouteName="Closet" headerMode='none'>
      <Stack.Screen name="Closet" component={Closet} />
      <Stack.Screen name="AddItem" component={AddItem} />
      <Stack.Screen name="UpdateItem" component={UpdateItem} />
      <Stack.Screen name="UpdateCloset" component={UpdateCloset} />
    </Stack.Navigator>
  );
};