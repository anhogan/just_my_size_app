import * as React from 'react'
import { TextInput, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../../assets/styles/SearchScreenStyles'

Search.navigationOptions = {
	header: null,
}

export default function Search() {
	const [searchTerm, setSearchTerm] = React.useState('')

	const searchCloset = (input) => {
		// Search through user's closet to find the item by store, style, type, or size
		console.log(`Searched closet for ${input}`)
		setSearchTerm('')
	}

	return (
		<View style={styles.container}>
			<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.inputBar}
						placeholder='Search the closet'
						clearButtonMode='while-editing'
						returnKeyType='search'
						selectionColor='#6674DE'
						onChangeText={(text) => setSearchTerm(text)}
						value={searchTerm}
						onSubmitEditing={() => searchCloset(searchTerm)}
					/>
				</View>

				{/* Map through search results ... if none return error message */}
			</ScrollView>
		</View>
	)
}
