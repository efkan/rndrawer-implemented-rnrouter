import React, { Text, View, Component } from 'react-native'

import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

import styles from './styles';

export default class Screen_Home extends Component {
  render() {
    return (
			<View style={styles.container}>
				<Text style={styles.welcome}>........Home screen........</Text>
				<Text style={styles.stuff}>Awesome stuffs are here</Text>
				<Text style={styles.notes}>You can take a tour by using the side menu </Text>
			</View>
		)
	}
}
