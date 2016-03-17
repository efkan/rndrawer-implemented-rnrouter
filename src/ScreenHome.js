import React, { Text, View, Component } from 'react-native'
import styles from './styles'

export default class ScreenHome extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>{'........Home screen........'}</Text>
				<Text style={styles.stuff}>{'Awesome stuffs are here'}</Text>
				<Text style={styles.notes}>{'You can take a tour by using the side menu'}</Text>
			</View>
		)
	}
}
