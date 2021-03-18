import * as React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { styles } from '../../assets/styles/LoginScreenStyles'
import { NanumText } from '../StyledText'
import useLogIn from '../../hooks/useLogIn'

export default function Login({ navigation }) {
	const [email, setEmail] = React.useState(null)
	const [password, setPassword] = React.useState(null)

	const logIn = () => useLogIn(email, setEmail, password, setPassword)

	const createAccount = () => {
		navigation.navigate('SignUp')
	}

	const resetPassword = () => {
		navigation.navigate('ResetPassword')
	}

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>JUST MY SIZE</Text>
			<Text style={styles.subHeaderText}>LOGIN</Text>
			<View style={styles.inputContainer}>
				<NanumText style={styles.inputEmail}>EMAIL ADDRESS</NanumText>
				<TextInput
					style={styles.inputBar}
					placeholder='Enter your email address'
					textContentType='emailAddress'
					autoCapitalize='none'
					clearButtonMode='while-editing'
					selectionColor='#6674DE'
					returnKeyType='next'
					onChangeText={(text) => setEmail(text)}
					value={email}
				/>
				<NanumText style={styles.inputPassword}>PASSWORD</NanumText>
				<TextInput
					style={styles.inputBar}
					placeholder='Enter your password'
					textContentType='password'
					secureTextEntry={true}
					clearButtonMode='while-editing'
					selectionColor='#6674DE'
					returnKeyType='done'
					onChangeText={(text) => setPassword(text)}
					value={password}
				/>
			</View>
			<View style={styles.spacer} />
			<TouchableOpacity onPress={logIn} style={styles.btn}>
				<NanumText style={styles.btnText}>Login</NanumText>
			</TouchableOpacity>
			<View style={styles.spacer} />
			<TouchableOpacity onPress={createAccount} style={styles.signUpBtn}>
				<NanumText style={styles.signUpBtnText}>Create Account</NanumText>
			</TouchableOpacity>
			<View style={styles.spacer} />
			<TouchableOpacity onPress={resetPassword} style={styles.resetBtn}>
				<NanumText style={styles.resetText}>Reset Password</NanumText>
			</TouchableOpacity>
		</View>
	)
}
