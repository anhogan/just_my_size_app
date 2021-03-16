import FirstOpen from './FirstOpenScreen';
import SignUp from './SignUpScreen';
import Login from './LoginScreen';
import ResetPassword from './ResetPasswordScreen';

export default function SignInStack({ stack }) {
  return (
    <stack.Navigator initialRouteName="Initial" headerMode='none'>
      <stack.Screen name="Initial" component={FirstOpen} options={{ headerTitle: ' ' }} />
      <stack.Screen name="SignUp" component={SignUp} options={{ headerTitle: ' ' }} />
      <stack.Screen name="Login" component={Login} options={{ headerTitle: ' ' }} />
      <stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerTitle: ' ' }} />
    </stack.Navigator>
  );
};