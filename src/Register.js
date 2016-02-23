import React, { View, Text, Component, } from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

import styles from './styles';

class Register extends React.Component {
  render() {
    return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Register screen</Text>
				<Button onPress={Actions.pop}>Back</Button>
			</View>
		);
	}
}


module.exports = Register;
