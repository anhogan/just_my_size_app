import * as firebase from 'firebase'
import * as React from 'react'

const useGetHeaderTitle = (route, initialRouteName) => {
	const routeName = route.state
		? route.state.routes[route.state.index].name
		: route.params?.screen || initialRouteName
	const user = firebase.auth().currentUser
	const [data, setData] = React.useState(null)

	if (user) {
		firebase
			.database()
			.ref('users/' + user.uid)
			.once('value', function (snapshot) {
				if (snapshot.val()) {
					setData(snapshot.val())
				}
			})
	}

	if (data !== null) {
		let nameLen = data.name.split(' ')

		if (nameLen.length > 1) {
			let userName = nameLen[0] + ' ' + nameLen[1]
			switch (routeName) {
				case 'Profile':
					return `${userName.toUpperCase()}'S PROFILE`
				case 'Closet':
					return `${userName.toUpperCase()}'S CLOSET`
				case 'Search':
					return `SEARCH CLOSET`
				case 'AddItem':
					return `ADD ITEM TO ${userName.toUpperCase()}'S CLOSET`
				case 'UpdateItem':
					return `UPDATE ITEM IN ${userName.toUpperCase()}'S CLOSET`
				case 'UpdateCloset':
					return `UPDATE ${userName.toUpperCase()}'S CLOSET`
			}
		} else {
			switch (routeName) {
				case 'Profile':
					return `${data.name.toUpperCase()}'S PROFILE`
				case 'Closet':
					return `${data.name.toUpperCase()}'S CLOSET`
				case 'Search':
					return `SEARCH CLOSET`
				case 'AddItem':
					return `ADD ITEM TO ${data.name.toUpperCase()}'S CLOSET`
				case 'UpdateItem':
					return `UPDATE ITEM IN ${data.name.toUpperCase()}'S CLOSET`
				case 'UpdateCloset':
					return `UPDATE ${data.name.toUpperCase()}'S CLOSET`
			}
		}
	} else {
		switch (routeName) {
			case 'Profile':
				return `PROFILE`
			case 'Closet':
				return `CLOSET`
			case 'Search':
				return `SEARCH CLOSET`
			case 'AddItem':
				return `ADD ITEM TO CLOSET`
			case 'UpdateItem':
				return `UPDATE ITEM IN CLOSET`
			case 'UpdateCloset':
				return `UPDATE CLOSET`
		}
	}
}

export default useGetHeaderTitle
