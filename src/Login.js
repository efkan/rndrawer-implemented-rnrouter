import React, { View, Text, StyleSheet, Component, } from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

import styles from './styles';

export default class Login extends React.Component {

  render(){
    return (
      <View style={styles.container}>
				<Text style={styles.welcome}>Login.js</Text>
				<Button onPress={Actions.Drawer}>Login</Button>
				<Text style={styles.notes}>Or you can {<Text style={styles.link} onPress={Actions.Register}>register</Text>} now.</Text>
      </View>
    )
  };

}

// const styles = StyleSheet.create({
// 	page: {
// 		top: 240,
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 	},
// });
