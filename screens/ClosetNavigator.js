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
const INITIAL_ROUTE_NAME = 'Closet';

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  const user = firebase.auth().currentUser;
  const [data, setData] = React.useState(null);

  firebase.database().ref('users/' + user.uid).once('value', function(snapshot) {
    if (snapshot.val()) {
      setData(snapshot.val())
    };
  });

  if (data !== null) {
    let nameLen = data.name.split(" ");

    if (nameLen.length > 1) {
      let userName = nameLen[0] + ' ' + nameLen[1];
      switch (routeName) {
        case 'Closet':
          return `${userName.toUpperCase()}'S CLOSET`;
        case 'AddItem':
          return `ADD ITEM TO ${userName.toUpperCase()}'S CLOSET`;
        case 'ScanBarcode':
          return `ADD ITEM TO ${userName.toUpperCase()}'S CLOSET`;
        case 'UpdateItem':
          return `UPDATE ITEM IN ${userName.toUpperCase()}'S CLOSET`;
        case 'AddCloset':
          return `ADD A CLOSET`;
        case 'UpdateCloset':
          return `UPDATE ${userName.toUpperCase()}'S CLOSET`;
      };
    } else {
      switch (routeName) {
        case 'Closet':
          return `${data.name.toUpperCase()}'S CLOSET`;
        case 'AddItem':
          return `ADD ITEM TO ${data.name.toUpperCase()}'S CLOSET`;
        case 'ScanBarcode':
          return `ADD ITEM TO ${data.name.toUpperCase()}'S CLOSET`;
        case 'UpdateItem':
          return `UPDATE ITEM IN ${data.name.toUpperCase()}'S CLOSET`;
        case 'AddCloset':
          return `ADD A CLOSET`;
        case 'UpdateCloset':
          return `UPDATE ${data.name.toUpperCase()}'S CLOSET`;
      };
    };
  } else {
    switch (routeName) {
      case 'Closet':
        return `CLOSET`;
      case 'AddItem':
        return `ADD ITEM TO CLOSET`;
      case 'ScanBarcode':
        return `ADD ITEM TO CLOSET`;
      case 'UpdateItem':
        return `UPDATE ITEM IN CLOSET`;
      case 'AddCloset':
        return `ADD A CLOSET`;
      case 'UpdateCloset':
        return `UPDATE CLOSET`;
    };
  };
};

export default function ClosetNavigator({ navigation, route }) {
  navigation.setOptions({ 
    headerTitle: getHeaderTitle(route), 
    headerTitleStyle: {
      textAlign: 'center', 
      color: '#6674DE',
      fontWeight: 'bold',
      fontFamily: 'jua'
    },
    headerStyle: {
      shadowColor: '#F0895F',
      shadowOffset: {width: 0, height: 2}
    }
  });

  return (
    <Stack.Navigator initialRouteName="Closet">
      <Stack.Screen name="Closet" component={Closet} />
      <Stack.Screen name="AddItem" component={AddItem} />
      <Stack.Screen name="ScanBarcode" component={ScanBarcode} />
      <Stack.Screen name="UpdateItem" component={UpdateItem} />
      <Stack.Screen name="AddCloset" component={AddCloset} />
      <Stack.Screen name="UpdateCloset" component={UpdateCloset} />
    </Stack.Navigator>
  );
};