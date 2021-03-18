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

	let nameLen = data ? data?.name.split(' ') : 0
	let userName = nameLen.length > 1 ? nameLen[0] + ' ' + nameLen[1] : data ? data?.name : null

	switch (routeName) {
		case 'Profile':
			return userName ? `${userName.toUpperCase()}'S PROFILE` : `PROFILE`
		case 'Closet':
			return userName ? `${userName.toUpperCase()}'S CLOSET` : `CLOSET`
		case 'Search':
			return `SEARCH CLOSET`
		case 'AddItem':
			return userName
				? `ADD ITEM TO ${userName.toUpperCase()}'S CLOSET`
				: `ADD ITEM TO CLOSET`
		case 'UpdateItem':
			return userName
				? `UPDATE ITEM IN ${userName.toUpperCase()}'S CLOSET`
				: `UPDATE ITEM IN CLOSET`
		case 'UpdateCloset':
			return userName ? `UPDATE ${userName.toUpperCase()}'S CLOSET` : `UPDATE CLOSET`
	}
}

export default useGetHeaderTitle
