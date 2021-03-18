import * as firebase from 'firebase'
import { Alert } from 'react-native'

const useResetPassword = (email, setSuccessEmailMessage, setFailureEmailMessage) => {
	if (!!email && email !== '') {
		firebase
			.auth()
			.sendPasswordResetEmail(email)
			.then(() => {
				setSuccessEmailMessage(true)
				setTimeout(() => {
					setSuccessEmailMessage(false)
				}, 2000)
			})
			.catch(() => {
				setFailureEmailMessage(true)
				setTimeout(() => {
					setFailureEmailMessage(false)
				}, 5000)
			})
	} else {
		!!email
			? Alert.alert(
					'Invalid Email',
					'Please enter the email address associated with your account',
					[{ text: 'Return to Reset Password' }]
			  )
			: null
	}
}

export default useResetPassword
