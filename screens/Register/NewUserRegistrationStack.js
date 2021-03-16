import NameCloset from './NameClosetScreen';
import AddFirstItem from './AddFirstItemScreen';
import GettingStarted from './GettingStartedScreen';

export default function NewUserRegistrationStack({ stack }) {
  return (
    <stack.Navigator initialRouteName="NameCloset" headerMode='none'>
      <stack.Screen name="NameCloset" component={NameCloset} options={{ headerTitle: ' ' }} />
      <stack.Screen name="AddFirstItem" component={AddFirstItem} options={{ headerTitle: ' ' }} />
      <stack.Screen name="GettingStarted" component={GettingStarted} options={{ headerTitle: ' ' }} />
    </stack.Navigator>
  );
};