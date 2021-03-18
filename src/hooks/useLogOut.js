import * as firebase from 'firebase'

const useLogOut = () => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			console.log('Successfully signed out!')
		})
		.catch((err) => {
			console.log(err.code, err.message)
		})
}

export default useLogOut
