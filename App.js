import * as React from 'react'
import * as firebase from 'firebase'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import useCachedResources from './src/hooks/useCachedResources'
import BottomTabNavigator from './src/components/Navigation/BottomTabNavigator'
import LinkingConfiguration from './src/components/Navigation/LinkingConfiguration'
import SignInStack from './src/components/Navigation/Stacks/SignInStack'
import NewUserRegistrationStack from './src/components/Navigation/Stacks/NewUserRegistrationStack'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})

const Stack = createStackNavigator()

const firebaseConfig = {
	apiKey: Constants.manifest.extra.apiKey,
	authDomain: Constants.manifest.extra.authDomain,
	databaseURL: Constants.manifest.extra.databaseURL,
	projectId: Constants.manifest.extra.projectId,
	storageBucket: Constants.manifest.extra.storageBucket,
	messagingSenderId: Constants.manifest.extra.messagingSenderId,
	appId: Constants.manifest.extra.appId,
	measurementId: Constants.manifest.extra.measurementId,
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

const database = firebase.database()
const auth = firebase.auth()

export default function App() {
	const isLoadingComplete = useCachedResources()
	const [userToken, setUserToken] = React.useState(null)
	const [userId, setUserId] = React.useState(null)
	const [newUser, setNewUser] = React.useState(false)

	auth.onAuthStateChanged(function (user) {
		if (user) {
			setUserToken(true)
			setUserId(user.uid)
		} else {
			setUserToken(null)
			setUserId(null)
		}
	})

	if (!isLoadingComplete) {
		return null
	} else {
		return (
			<View style={styles.container}>
				{Platform.OS === 'ios' && <StatusBar barStyle='dark-content' />}
				<NavigationContainer linking={LinkingConfiguration}>
					<Stack.Navigator>
						{userToken == null ? (
							<Stack.Screen
								name='SignInStack'
								component={SignInStack}
								options={{ headerTitle: ' ', headerStyle: { height: 0 } }}
							/>
						) : newUser ? (
							<>
								<Stack.Screen
									name='NewUserRegistrationStack'
									component={NewUserRegistrationStack}
									options={{ headerTitle: ' ', headerStyle: { height: 0 } }}
								/>
							</>
						) : (
							<Stack.Screen name='Root' component={BottomTabNavigator} />
						)}
					</Stack.Navigator>
				</NavigationContainer>
			</View>
		)
	}
}
