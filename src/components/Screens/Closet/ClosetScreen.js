import * as React from 'react'
import * as firebase from 'firebase'
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import ActionButton from 'react-native-action-button'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../../../assets/styles/ClosetScreenStyles'
import { NanumText } from '../../StyledText'

export default function Closet({ navigation }) {
	const database = firebase.database()
	const user = firebase.auth().currentUser

	const [userData, setUserData] = React.useState()
	const [closet, setCloset] = React.useState([])

	React.useEffect(() => {
		if (user) {
			const closetItemRef = database.ref('users/' + user.uid + '/closet')
			const userRef = database.ref('users/' + user.uid)
			closetItemRef.once('value', function (snapshot) {
				setCloset(snapshot.val())
			})
			userRef.once('value', function (snapshot) {
				setUserData(snapshot.val())
			})
		}
	}, [])

	const addItem = () => {
		navigation.navigate('AddItem')
	}

	return (
		<View style={styles.container}>
			<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
				{closet !== null && closet.length > 1 ? (
					<NanumText>There are closet items</NanumText>
				) : (
					<NanumText>
						There are no items in your closet. Add your first one by clicking the '+'
						button!
					</NanumText>
				)}
				<ActionButton style={styles.actionButton} buttonColor='#6674DE'>
					<ActionButton.Item buttonColor='#F0895F' title='Add Item' onPress={addItem}>
						<FontAwesome5 name='tshirt' style={styles.actionButtonIcon} />
					</ActionButton.Item>
				</ActionButton>
			</ScrollView>
		</View>
	)
}

Closet.navigationOptions = {
	header: null,
}
