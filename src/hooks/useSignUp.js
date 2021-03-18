import * as firebase from 'firebase'
import { Alert } from 'react-native'

const useSignUp = (email, setEmail, password, setPassword, confirmPassword, setConfirmPassword) => {
	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (!!email && emailRegex.test(email) && password === confirmPassword) {
		firebase
			.auth()
			.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
			.then(() => {
				setEmail('')
				setPassword('')
				setConfirmPassword('')

				return firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(() => {
						const user = firebase.auth().currentUser

						database.ref('users/' + user.uid).set({
							email: email,
							name: ' ',
							newUser: true,
							plan: 'Free',
							uid: user.uid,
							closet: [
								{
									id: 1,
									name: ' ',
									items: [
										{
											id: 0,
											store: 'Just My Size',
											type: 'App',
											style: 'Yours',
											size: 'The perfect one',
										},
									],
								},
							],
						})
					})
					.catch((err) => {
						if (err.code.includes('email-already-in-use')) {
							Alert.alert('Invalid Email Address', 'Email address already in use', [
								{ text: 'Return to Sign Up' },
							])
						}
					})
			})
			.catch((err) => {
				console.log(err.code, err.message)
			})
	} else {
		!!email
			? Alert.alert(
					'Invalid Credentials',
					'Please enter a valid email address and confirm that both passwords match exactly',
					[{ text: 'Return to Sign Up' }]
			  )
			: null
	}
}

export default useSignUp
