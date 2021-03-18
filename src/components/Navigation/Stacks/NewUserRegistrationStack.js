import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NameCloset from '../../Screens/Register/NameClosetScreen'
import AddFirstItem from '../../Screens/Register/AddFirstItemScreen'
import GettingStarted from '../../Screens/Register/GettingStartedScreen'

const Stack = createStackNavigator()

export default function NewUserRegistrationStack() {
	return (
		<Stack.Navigator initialRouteName='NameCloset' headerMode='none'>
			<Stack.Screen name='NameCloset' component={NameCloset} options={{ headerTitle: ' ' }} />
			<Stack.Screen
				name='AddFirstItem'
				component={AddFirstItem}
				options={{ headerTitle: ' ' }}
			/>
			<Stack.Screen
				name='GettingStarted'
				component={GettingStarted}
				options={{ headerTitle: ' ' }}
			/>
		</Stack.Navigator>
	)
}
