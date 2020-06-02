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

// Setup analytics
// firebase.analytics();

// Reference nested data using .ref().child('TITLE')
const database = firebase.database();

// Authenticate users for Sign Up (createUserWithEmailandPassword), Login (signInWithEmailandPassword), and Logout (signOut) and manage state changes (onAuthStateChanged)
const auth = firebase.auth();
// Move to login and signup screens
// auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
//   .then(() => {
//     return firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
//       Alert.alert(
//         'Invalid Credentials',
//         'The email and / or password entered do not match a current account.',
//         [
//           { text: 'Return to Login' }
//         ]
//       );
//       console.log(err.code, err.message);
//     });
//     return firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
//       Alert.alert(
//         'Invalid Credentials',
//         'Please enter a valid email address and confirm that both passwords match exactly.',
//         [
//           { text: 'Return to Login' }
//         ]
//       )
//       console.log(err.code, err.message);
//     });
//   })
//   .catch(err => {
//     console.log(err.code, err.message)
//   });

// Add .on('value', cb) to database reference for realtime updates

function SetupStack() {
  return (
    <Stack.Navigator initialRouteName="Initial" headerMode='none'>
      <Stack.Screen name="Initial" component={FirstOpen} options={{ headerTitle: ' ' }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerTitle: ' ' }} />
      <Stack.Screen name="Login" component={Login} options={{ headerTitle: ' ' }} />
      <Stack.Screen name="NameCloset" component={NameCloset} options={{ headerTitle: ' ' }} />
      <Stack.Screen name="AddFirstItem" component={AddFirstItem} options={{ headerTitle: ' ' }} />
      <Stack.Screen name="GettingStarted" component={GettingStarted} options={{ headerTitle: ' ' }} />
    </Stack.Navigator>
  );
};

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const [userToken, setUserToken] = React.useState(null);

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
              <>
                <Stack.Screen 
                  name="SetupStack" 
                  component={SetupStack} 
                  options={
                    { headerTitle: ' ', headerStyle: { height: 0 } }
                  } />
                {/* Remove this when authentication is working -> have skip change Auth state and return user */}
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