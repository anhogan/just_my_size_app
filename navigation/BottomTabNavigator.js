import * as React from 'react';
import * as firebase from 'firebase';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import Profile from '../screens/ProfileScreen'
import Search from '../screens/SearchScreen';
import Closet from '../screens/ClosetScreen';

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
        component={Closet}
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
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  const user = firebase.auth().currentUser;

  if (user.displayName !== null) {
    switch (routeName) {
      case 'Profile':
        return `${user.displayName.toUpperCase()}'S PROFILE`;
      case 'Closet':
        return `${user.displayName.toUpperCase()}'S CLOSET`;
      case 'Search':
        return `SEARCH CLOSET`;
    }
  } else {
    switch (routeName) {
      case 'Profile':
        return `PROFILE`;
      case 'Closet':
        return `CLOSET`;
      case 'Search':
        return `SEARCH CLOSET`;
    }
  }
}
