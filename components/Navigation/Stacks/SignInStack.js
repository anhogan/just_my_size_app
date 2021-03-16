import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Launch from '../screens/Setup/LaunchScreen';
import SignUp from '../screens/Setup/SignUpScreen';
import Login from '../screens/Setup/LoginScreen';
import ResetPassword from '../screens/Setup/ResetPasswordScreen';

const Stack = createStackNavigator();

export default function SignInStack() {
  return (
    <Stack.Navigator initialRouteName="Initial" headerMode='none'>
      <Stack.Screen name="Initial" component={Launch} options={{ headerTitle: ' ' }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerTitle: ' ' }} />
      <Stack.Screen name="Login" component={Login} options={{ headerTitle: ' ' }} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerTitle: ' ' }} />
    </Stack.Navigator>
  );
};