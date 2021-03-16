import * as React from 'react';
import * as firebase from 'firebase';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

import Profile from '../Screens/ProfileScreen'
import Search from '../Screens/SearchScreen';
import ClosetNavigator from './ClosetNavigator';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Closet';

export default function BottomTabNavigator({ navigation, route }) {
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
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        style: {
          borderTopColor: '#F0895F',
          borderTopWidth: 2
        }
      }} >
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => 
            <FontAwesome5 
              focused={focused} 
              name="user-circle" 
              size={30} 
              style={{ marginBottom: -15 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} />,
        }}
      />
      <BottomTab.Screen
        name="Closet"
        component={ClosetNavigator}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => 
            <MaterialCommunityIcons 
              focused={focused} 
              name="hanger" 
              size={30} 
              style={{ marginBottom: -15 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => 
            <FontAwesome5 
              focused={focused} 
              name="search" 
              size={24} 
              style={{ marginBottom: -15 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

function getHeaderTitle(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : route.params?.screen || INITIAL_ROUTE_NAME;
  const user = firebase.auth().currentUser;
  const [data, setData] = React.useState(null);

  if (user) {
    firebase.database().ref('users/' + user.uid).once('value', function(snapshot) {
      if (snapshot.val()) {
        setData(snapshot.val())
      };
    });
  };

  if (data !== null) {
    let nameLen = data.name.split(" ");

    if (nameLen.length > 1) {
      let userName = nameLen[0] + ' ' + nameLen[1];
      switch (routeName) {
        case 'Profile':
          return `${userName.toUpperCase()}'S PROFILE`;
        case 'Closet':
          return `${userName.toUpperCase()}'S CLOSET`;
        case 'Search':
          return `SEARCH CLOSET`;
        case 'AddItem':
          return `ADD ITEM TO ${userName.toUpperCase()}'S CLOSET`;
        case 'UpdateItem':
          return `UPDATE ITEM IN ${userName.toUpperCase()}'S CLOSET`;
        case 'UpdateCloset':
          return `UPDATE ${userName.toUpperCase()}'S CLOSET`;
      }
    } else {
      switch (routeName) {
        case 'Profile':
          return `${data.name.toUpperCase()}'S PROFILE`;
        case 'Closet':
          return `${data.name.toUpperCase()}'S CLOSET`;
        case 'Search':
          return `SEARCH CLOSET`;
        case 'AddItem':
          return `ADD ITEM TO ${data.name.toUpperCase()}'S CLOSET`;
        case 'UpdateItem':
          return `UPDATE ITEM IN ${data.name.toUpperCase()}'S CLOSET`;
        case 'UpdateCloset':
          return `UPDATE ${data.name.toUpperCase()}'S CLOSET`;
      };
    };
  } else {
    switch (routeName) {
      case 'Profile':
        return `PROFILE`;
      case 'Closet':
        return `CLOSET`;
      case 'Search':
        return `SEARCH CLOSET`;
      case 'AddItem':
        return `ADD ITEM TO CLOSET`;
      case 'UpdateItem':
        return `UPDATE ITEM IN CLOSET`;
      case 'UpdateCloset':
        return `UPDATE CLOSET`;
    };
  };
};