import { Alert } from 'react-native'

const useUpdateProfile = (
	emailAddress,
	user,
	name,
	database,
	setSuccessMessage,
	setFailureMessage,
	setTimeOutMessage
) => {
	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (emailAddress !== user.email) {
		if (emailRegex.test(emailAddress)) {
			user.updateEmail(emailAddress)
				.then(() => {
					updateUserProfile(
						name,
						database,
						user,
						emailAddress,
						setSuccessMessage,
						setFailureMessage
					)
				})
				.catch((err) => {
					if (err.code.includes('email-already-in-use')) {
						Alert.alert('Invalid Email Address', 'Email address already in use', [
							{ text: 'Return to Profile' },
						])
					} else {
						setTimeOutMessage(true)
						setTimeout(() => {
							setTimeOutMessage(false)
						}, 4000)
					}
				})
		} else {
			Alert.alert('Invalid Email', 'Please enter a valid email address', [
				{ text: 'Return to Profile' },
			])
		}
	} else {
		updateUserProfile(name, database, user, emailAddress, setSuccessMessage, setFailureMessage)
	}
}

const updateUserProfile = (
	name,
	database,
	user,
	emailAddress,
	setSuccessMessage,
	setFailureMessage
) => {
	user.updateProfile({
		displayName: name,
	})
		.then(() => {
			database.ref('users/' + user.uid).update({
				email: emailAddress,
				name: name,
				newUser: false,
				plan: 'Free',
				uid: id,
			})

			database.ref('users/' + user.uid + '/closet/0').update({
				name: name,
			})

			setSuccessMessage(true)
			setTimeout(() => {
				setSuccessMessage(false)
			}, 2000)
		})
		.catch(() => {
			setFailureMessage(true)
			setTimeout(() => {
				setFailureMessage(false)
			}, 2000)
		})
}

export default useUpdateProfile
