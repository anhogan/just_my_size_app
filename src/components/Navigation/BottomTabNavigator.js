import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import Profile from '../Screens/ProfileScreen'
import Search from '../Screens/SearchScreen'
import ClosetNavigator from './ClosetNavigator'
import useGetHeaderTitle from '../../hooks/useGetHeaderTitle'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Closet'

export default function BottomTabNavigator({ navigation, route }) {
	const getHeaderTitle = () => useGetHeaderTitle(route, INITIAL_ROUTE_NAME)

	navigation.setOptions({
		headerTitle: getHeaderTitle(route),
		headerTitleStyle: {
			textAlign: 'center',
			color: '#6674DE',
			fontWeight: 'bold',
			fontFamily: 'jua',
		},
		headerStyle: {
			shadowColor: '#F0895F',
			shadowOffset: { width: 0, height: 2 },
		},
	})

	return (
		<BottomTab.Navigator
			initialRouteName={INITIAL_ROUTE_NAME}
			tabBarOptions={{
				style: {
					borderTopColor: '#F0895F',
					borderTopWidth: 2,
				},
			}}
		>
			<BottomTab.Screen
				name='Profile'
				component={Profile}
				options={{
					title: '',
					tabBarIcon: ({ focused }) => (
						<FontAwesome5
							focused={focused}
							name='user-circle'
							size={30}
							style={{ marginBottom: -15 }}
							color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name='Closet'
				component={ClosetNavigator}
				options={{
					title: '',
					tabBarIcon: ({ focused }) => (
						<MaterialCommunityIcons
							focused={focused}
							name='hanger'
							size={30}
							style={{ marginBottom: -15 }}
							color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name='Search'
				component={Search}
				options={{
					title: '',
					tabBarIcon: ({ focused }) => (
						<FontAwesome5
							focused={focused}
							name='search'
							size={24}
							style={{ marginBottom: -15 }}
							color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
						/>
					),
				}}
			/>
		</BottomTab.Navigator>
	)
}
