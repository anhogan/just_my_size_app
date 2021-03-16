import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Launch from '../../Screens/LaunchScreen';
import SignUp from '../../Screens/SignUpScreen';
import Login from '../../Screens/LoginScreen';
import ResetPassword from '../../Screens/ResetPasswordScreen';

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