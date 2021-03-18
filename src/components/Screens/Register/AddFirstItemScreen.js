import * as React from 'react'
import * as firebase from 'firebase'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { styles } from '../../../assets/styles/AddFirstItemScreenStyles'
import { NanumText } from '../../StyledText'
import { FontAwesome } from '@expo/vector-icons'

export default function AddFirstItem({ navigation }) {
	const database = firebase.database()
	const user = firebase.auth().currentUser

	const [store, setStore] = React.useState('')
	const [type, setType] = React.useState('')
	const [style, setStyle] = React.useState('')
	const [size, setSize] = React.useState('')

	const next = () => {
		navigation.navigate('GettingStarted')
	}

	const skip = () => {
		database.ref('users/' + user.uid).update({
			newUser: false,
		})
	}

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>JUST MY SIZE</Text>
			<Text style={styles.subHeaderText}>WELCOME</Text>
			<NanumText style={styles.perfectText}>The perfect fit every time</NanumText>
			<NanumText style={styles.setupText}>Add your first item!</NanumText>
			<View style={styles.inputContainer}>
				<NanumText style={styles.inputFive}>STORE</NanumText>
				<TextInput
					style={styles.inputBar}
					placeholder='Enter the store name'
					clearButtonMode='while-editing'
					selectionColor='#6674DE'
					returnKeyType='next'
					onChangeText={(text) => setStore(text)}
					value={store}
				/>
				<NanumText style={styles.inputFive}>TYPE</NanumText>
				<TextInput
					style={styles.inputBar}
					placeholder='Jeans, Sneakers, etc.'
					clearButtonMode='while-editing'
					selectionColor='#6674DE'
					returnKeyType='next'
					onChangeText={(text) => setType(text)}
					value={type}
				/>
				<NanumText style={styles.inputFive}>STYLE</NanumText>
				<TextInput
					style={styles.inputBar}
					placeholder='High-Waisted Jeggings, AirMax, etc.'
					clearButtonMode='while-editing'
					selectionColor='#6674DE'
					returnKeyType='next'
					onChangeText={(text) => setStyle(text)}
					value={style}
				/>
				<NanumText style={styles.inputFour}>SIZE</NanumText>
				<TextInput
					style={styles.inputBar}
					placeholder='Enter your size'
					clearButtonMode='while-editing'
					selectionColor='#6674DE'
					returnKeyType='done'
					onChangeText={(text) => setSize(text)}
					value={size}
				/>
			</View>
			<View style={styles.spacer} />
			<TouchableOpacity onPress={next} style={styles.btn}>
				<NanumText style={styles.btnText}>Next</NanumText>
			</TouchableOpacity>
			<View style={styles.spacer} />
			<TouchableOpacity onPress={skip} style={styles.skipBtn}>
				<NanumText style={styles.skipBtnText}>Skip</NanumText>
			</TouchableOpacity>
			<View style={styles.spacer} />
			<View style={styles.progressContainer}>
				<FontAwesome name='circle' size={20} color='#F0895F' />
				<FontAwesome name='circle' size={20} color='white' />
				<FontAwesome name='circle' size={20} color='#F0895F' />
			</View>
		</View>
	)
}
