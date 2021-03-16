import * as React from 'react'
import * as firebase from 'firebase'

import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from '../../../assets/styles/GettingStartedScreenStyles'
import { NanumText } from '../../StyledText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

export default function GettingStarted() {
	const database = firebase.database()
	const user = firebase.auth().currentUser

	const finish = () => {
		database.ref('users/' + user.uid).update({
			newUser: false,
		})
	}

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>JUST MY SIZE</Text>
			<Text style={styles.subHeaderText}>WELCOME</Text>
			<NanumText style={styles.perfectText}>The perfect fit every time</NanumText>
			<NanumText style={styles.setupText}>
				Congratulations, your account is now setup!
			</NanumText>
			<Text style={styles.closetTips}>Closet Management Tips</Text>
			<View style={styles.tipContainer}>
				<MaterialCommunityIcons name='hanger' size={24} color='white' />
				<NanumText style={styles.tipText}>Edit items for up-tp-date sizing</NanumText>
			</View>
			<View style={styles.tipContainer}>
				<MaterialCommunityIcons name='hanger' size={24} color='white' />
				<NanumText style={styles.tipText}>
					Delete old items to keep your closet in style
				</NanumText>
			</View>
			<View style={styles.tipContainer}>
				<MaterialCommunityIcons name='hanger' size={24} color='white' />
				<NanumText style={styles.tipText}>Search to easily find closet items</NanumText>
			</View>
			<View style={styles.spacer}></View>
			<TouchableOpacity onPress={finish} style={styles.closetBtn}>
				<NanumText style={styles.closetText}>To My Closet</NanumText>
			</TouchableOpacity>
			<View style={styles.spacer}></View>
			<View style={styles.progressContainer}>
				<FontAwesome name='circle' size={20} color='#F0895F' />
				<FontAwesome name='circle' size={20} color='#F0895F' />
				<FontAwesome name='circle' size={20} color='white' />
			</View>
		</View>
	)
}
