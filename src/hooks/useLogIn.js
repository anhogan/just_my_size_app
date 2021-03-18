import * as firebase from 'firebase'
import { Alert } from 'react-native'

const useLogIn = (email, setEmail, password, setPassword) => {
	if (!!email && !!password) {
		firebase
			.auth()
			.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
			.then(() => {
				setEmail('')
				setPassword('')

				return firebase
					.auth()
					.signInWithEmailAndPassword(email, password)
					.catch((err) => {
						Alert.alert(
							'Invalid Credentials',
							'The email and / or password entered do not match a current account',
							[{ text: 'Return to Login' }]
						)
					})
			})
			.catch((err) => {
				console.log(err.code, err.message)
			})
	}
}

export default useLogIn
