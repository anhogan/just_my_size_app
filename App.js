import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Alert } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

import FirstOpen from './screens/Setup/FirstOpenScreen';
import SignUp from './screens/Setup/SignUpScreen';
import Login from './screens/Setup/LoginScreen';
import ResetPassword from './screens/Setup/ResetPasswordScreen';
import NameCloset from './screens/Register/NameClosetScreen';
import AddFirstItem from './screens/Register/AddFirstItemScreen';
import GettingStarted from './screens/Register/GettingStartedScreen';

import * as firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyB1nTykFeaLQKcNzKmcHAjbC481aFFQQsw",
  authDomain: "just-my-size.firebaseapp.com",
  databaseURL: "https://just-my-size.firebaseio.com",
  projectId: "just-my-size",
  storageBucket: "just-my-size.appspot.com",
  messagingSenderId: "302956079339",
  appId: "1:302956079339:web:443698bf1a0095d87336ae",
  measurementId: "G-56PSNW1J1Q"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
};

// const analytics = firebase.analytics();
// Reference nested data using .ref().child('TITLE')
const database = firebase.database();
const auth = firebase.auth();

// Add .on('value', cb) to database reference for realtime updates

function SignInStack() {
  return (
    <Stack.Navigator initialRouteName="Initial" headerMode='none'>
      <Stack.Screen name="Initial" component={FirstOpen} options={{ headerTitle: ' ' }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerTitle: ' ' }} />
      <Stack.Screen name="Login" component={Login} options={{ headerTitle: ' ' }} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerTitle: ' ' }} />
    </Stack.Navigator>
  );
};

function SetupStack() {
  return (
    <Stack.Navigator initialRouteName="NameCloset" headerMode='none'>
      <Stack.Screen name="NameCloset" component={NameCloset} options={{ headerTitle: ' ' }} />
      <Stack.Screen name="AddFirstItem" component={AddFirstItem} options={{ headerTitle: ' ' }} />
      <Stack.Screen name="GettingStarted" component={GettingStarted} options={{ headerTitle: ' ' }} />
    </Stack.Navigator>
  );
};

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const [userToken, setUserToken] = React.useState(null);
  const newUser = false;

  auth.onAuthStateChanged(function(user) {
    if (user) {
      setUserToken(true);
    } else {
      setUserToken(null);
    }
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator initialRouteName="SetupStack">
            {userToken == null ? (
              <Stack.Screen 
                name="SetupStack" 
                component={SignInStack}
                initialParams={{newUser: false}} 
                options={
                  { headerTitle: ' ', headerStyle: { height: 0 } }
                } />
            ) : newUser ? (
              <>
                <Stack.Screen 
                  name="SetupStack" 
                  component={SetupStack}
                  initialParams={{newUser: true}} 
                  options={
                    { headerTitle: ' ', headerStyle: { height: 0 } }
                  } />
                <Stack.Screen name="Root" component={BottomTabNavigator} />
              </>
            ) : (
              <Stack.Screen name="Root" component={BottomTabNavigator} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
};