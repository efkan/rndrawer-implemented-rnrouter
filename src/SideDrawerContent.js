import React, { View, Component, PropTypes } from 'react-native'
import Button from 'react-native-button'
import { Actions } from 'react-native-router-flux'

export default class SideDrawerContent extends Component {
	static contextTypes = {
		drawer: PropTypes.object.isRequired,
	};

	render() {
		const { drawer } = this.context
		return (
			<View>
				<Button onPress={() => { drawer.close(); Actions.Home.call() }}>{'Home'}</Button>
				<Button onPress={() => { drawer.close(); Actions.Screen1.call() }}>{'Screen 1'}</Button>
				<Button onPress={() => { drawer.close(); Actions.Screen2.call() }}>{'Screen 2'}</Button>
				<Button onPress={() => { Actions.Login.call() }}>{'Logout'}</Button>
			</View>
		)
	}
}

SideDrawerContent.propTypes = {
	drawer: PropTypes.object
}
