import React, { View, Text, Component, } from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

import styles from './styles';

export default class Screen1 extends Component {

  render() {
    return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Screen 1 </Text>
				<Button onPress={Actions.Drawer}>Home</Button>
				<Text style={styles.stuff}>Awesome stuffs are here</Text>
			</View>
		)
	}
}
