import * as React from 'react'
import * as firebase from 'firebase'

import { TextInput, TouchableOpacity, View, Alert } from 'react-native'

import { styles } from '../../assets/styles/ProfileScreenStyles'
import { NanumText } from '../StyledText'
import useResetPassword from '../../hooks/useResetPassword'
import useLogOut from '../../hooks/useLogOut'
import useUpdateProfile from '../../hooks/useUpdateProfile'

export default function Profile() {
	const database = firebase.database()
	const user = firebase.auth().currentUser

	const [name, setName] = React.useState(user.displayName)
	const [emailAddress, setEmailAddress] = React.useState(user.email)
	const [successMessage, setSuccessMessage] = React.useState(false)
	const [failureMessage, setFailureMessage] = React.useState(false)
	const [successEmailMessage, setSuccessEmailMessage] = React.useState(false)
	const [failureEmailMessage, setFailureEmailMessage] = React.useState(false)
	const [timeoutMessage, setTimeOutMessage] = React.useState(false)

	const resetPassword = useResetPassword(email, setSuccessEmailMessage, setFailureEmailMessage)

	const updateProfile = useUpdateProfile(
		emailAddress,
		user,
		name,
		database,
		setSuccessMessage,
		setFailureMessage,
		setTimeOutMessage
	)

	const logout = useLogOut()

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<NanumText style={styles.inputName}>FIRST NAME</NanumText>
				<TextInput
					style={styles.inputBar}
					placeholder={name ? null : 'Enter your first name'}
					autoCapitalize='none'
					clearButtonMode='while-editing'
					selectionColor='#6674DE'
					returnKeyType='done'
					onChangeText={(text) => setName(text)}
					value={name}
				/>
				<NanumText style={styles.inputEmail}>EMAIL ADDRESS</NanumText>
				<TextInput
					style={styles.inputBar}
					textContentType='emailAddress'
					autoCapitalize='none'
					clearButtonMode='while-editing'
					selectionColor='#6674DE'
					returnKeyType='done'
					onChangeText={(text) => setEmailAddress(text)}
					value={emailAddress}
				/>
			</View>
			<View style={styles.spacer}></View>
			<TouchableOpacity onPress={resetPassword} style={styles.resetBtn}>
				<NanumText style={styles.btnText}>Change Your Password</NanumText>
			</TouchableOpacity>
			{/* Add in upgrade option via App Store or Google Play Store => send to Firebase */}
			<View style={styles.inputContainer}>
				<NanumText style={styles.inputPlan}>PLAN</NanumText>
				<NanumText style={styles.planType}>Free</NanumText>
			</View>
			<View style={styles.spacer}></View>
			<TouchableOpacity onPress={updateProfile} style={styles.updateBtn}>
				<NanumText style={styles.btnText}>Update Profile</NanumText>
			</TouchableOpacity>
			<View style={styles.spacer}></View>
			<TouchableOpacity onPress={logout} style={styles.logoutBtn}>
				<NanumText style={styles.btnText}>Logout</NanumText>
			</TouchableOpacity>
			{successMessage ? (
				<View style={styles.successMessage}>
					<NanumText style={{ color: '#6674DE' }}>
						Successfully updated profile!
					</NanumText>
				</View>
			) : failureMessage ? (
				<View style={styles.failureMessage}>
					<NanumText style={{ color: 'white' }}>Unable to update profile</NanumText>
				</View>
			) : successEmailMessage ? (
				<View style={styles.successMessage}>
					<NanumText style={{ color: '#6674DE' }}>
						Password reset email sent to {user.email}!
					</NanumText>
				</View>
			) : failureEmailMessage ? (
				<View style={styles.failureMessage}>
					<NanumText style={{ color: 'white' }}>
						There was an error sending the email. Please try again
					</NanumText>
				</View>
			) : timeoutMessage ? (
				<View style={styles.failureMessage}>
					<NanumText style={{ color: 'white' }}>
						To change your email address, please logout and log back in to verify this
						is your account
					</NanumText>
				</View>
			) : null}
		</View>
	)
}

Profile.navigationOptions = {
	header: null,
}
