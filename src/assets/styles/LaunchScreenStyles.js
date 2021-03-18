import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#6674DE',
		paddingTop: '15%',
	},
	headerText: {
		fontFamily: 'jua',
		fontSize: 50,
		color: 'white',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '15%',
	},
	image: {
		width: 250,
		height: 250,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '50%',
	},
	signUpBtn: {
		backgroundColor: '#8AE8F9',
		width: '30%',
		height: '5%',
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: 5,
	},
	signUpText: {
		fontSize: 20,
		textAlign: 'center',
		color: '#6674DE',
		marginTop: 'auto',
		marginBottom: 'auto',
	},
	loginContainer: {
		marginTop: '5%',
	},
	logInBtn: {
		backgroundColor: '#6674DE',
		width: '30%',
		height: '5%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '5%',
		borderRadius: 5,
		display: 'flex',
		justifyContent: 'center',
	},
	loginText: {
		fontSize: 18,
		color: 'white',
		textDecorationLine: 'underline',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
})
