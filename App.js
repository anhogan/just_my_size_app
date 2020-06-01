import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, ActivityIndicator } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

import FirstOpenScreen from './screens/FirstOpenScreen';

import * as firebase from 'firebase';
import { State } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const Stack = createStackNavigator();
const AuthContext = React.createContext();

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

// Add .on('value', cb) to database reference for realtime updates

export default function App(props) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'LOAD_TOKEN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e.message);
      }
      dispatch({ type: 'LOAD_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      logIn: async data => {
        // Change to Firebase auth token
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // Change to Firebase auth token
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AuthContext.Provider value={authContext}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
          <NavigationContainer linking={LinkingConfiguration}>
            <Stack.Navigator>
              {state.userToken == null ? (
                <Stack.Screen 
                  name="First Open" 
                  component={FirstOpenScreen} />
              ) : (
                <Stack.Screen 
                  name="Root" 
                  component={BottomTabNavigator} />
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </AuthContext.Provider>
    );
  }
};