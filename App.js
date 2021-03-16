import * as React from 'react';
import * as firebase from 'firebase';

import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

import NewUserRegistrationStack from './screens/Register/NewUserRegistrationStack';

import { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID } from 'react-native-dotenv'
import SignInStack from './screens/Setup/SignInStack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
};

const analytics = firebase.analytics();
const database = firebase.database();
const auth = firebase.auth();

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
                  component={NewUserRegistrationStack} 
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