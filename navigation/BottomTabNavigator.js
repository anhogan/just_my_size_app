import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import ProfileScreen from '../screens/ProfileScreen'
import SearchScreen from '../screens/SearchScreen';
import ClosetScreen from '../screens/ClosetScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
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
        component={ClosetScreen}
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
        component={SearchScreen}
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

  switch (routeName) {
    case 'Profile':
      return `PROFILE`;
    case 'Closet':
      return `CLOSET`;
    case 'Search':
      return `CLOSET`;
  }
}
