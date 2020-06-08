import * as React from 'react';
import * as firebase from 'firebase';

import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import useCachedResources from './hooks/useCachedResources';
import { UserProvider, UserConsumer } from './contexts/UserContext';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

import FirstOpen from './screens/Setup/FirstOpenScreen';
import SignUp from './screens/Setup/SignUpScreen';
import Login from './screens/Setup/LoginScreen';
import ResetPassword from './screens/Setup/ResetPasswordScreen';
import NameCloset from './screens/Register/NameClosetScreen';
import AddFirstItem from './screens/Register/AddFirstItemScreen';
import GettingStarted from './screens/Register/GettingStartedScreen';

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
const database = firebase.database();
const auth = firebase.auth();

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

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [userToken, setUserToken] = React.useState(null);
  const [userId, setUserId] = React.useState(null);
  const [newUser, setNewUser] = React.useState(false);

  auth.onAuthStateChanged(function(user) {
    if (user) {
      setUserToken(true);
      setUserId(user.uid);
    } else {
      setUserToken(null);
      setUserId(null);
    }
  });

  React.useEffect(() => {
    const userRef = database.ref('users/' + userId);
    userRef.once('value', function(snapshot) {
      console.log(snapshot.val())
      setNewUser(snapshot.val().newUser)
    });
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            {userToken == null ? (
              <Stack.Screen 
                name="SetupStack" 
                component={SignInStack} 
                options={{ headerTitle: ' ', headerStyle: { height: 0 } }} />
            ) : newUser ? (
              <>
                <Stack.Screen 
                  name="SetupStack" 
                  component={SetupStack} 
                  options={{ headerTitle: ' ', headerStyle: { height: 0 } }} />
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