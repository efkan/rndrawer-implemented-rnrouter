import React, { View, Text, Navigator, Platform, StyleSheet, Component } from 'react-native';
import { Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux';

import Login from './Login';
import Register from './Register';
import SideDrawer from './SideDrawer';
import Screen_Home from './Screen_Home';
import Screen1 from './Screen1';
import Screen2 from './Screen2';


/** Optional Redux section ******************************************/
/*  npm uninstall react-redux --save && npm uninstall redux --save  */

// var RNRF = require('react-native-router-flux');
// var {Route, Schema, Animations, Actions, TabBar} = RNRF;
// import { createStore } from 'redux'
// import { Provider, connect } from 'react-redux'
//
// function reducer(state = {}, action) {
//     switch (action.type) {
//         case Actions.BEFORE_ROUTE:
//             //console.log("BEFORE_ROUTE:", action);
//             return state;
//         case Actions.AFTER_ROUTE:
//             //console.log("AFTER_ROUTE:", action);
//             return state;
//         case Actions.AFTER_POP:
//             //console.log("AFTER_POP:", action);
//             return state;
//         case Actions.BEFORE_POP:
//             //console.log("BEFORE_POP:", action);
//             return state;
//         case Actions.AFTER_DISMISS:
//             //console.log("AFTER_DISMISS:", action);
//             return state;
//         case Actions.BEFORE_DISMISS:
//             //console.log("BEFORE_DISMISS:", action);
//             return state;
//         default:
//             return state;
//     }
//
// }
// let store = createStore(reducer);
// const Router = connect()(RNRF.Router);

/********************************************************************/

const hideNavBar = Platform.OS === 'android'
const paddingTop = Platform.OS === 'android' ? 0 : 8

export default class Example extends Component {

	// Used for to pass the drawer to the all children
	static childContextTypes = {
		drawer: React.PropTypes.object,
	};

	constructor (props) {
		super(props);
		this.state = {
			drawer: null,
		};
	}

	render() {
		const { drawer } = this.state;

		return (
			<Router name='root'>
				<Schema
					name='boot'
					sceneConfig={Navigator.SceneConfigs.FadeAndroid}
					hideNavBar={true}
					type='replace'
				/>
				<Schema
					name='main'
					sceneConfig={Navigator.SceneConfigs.FadeAndroid}
					hideNavBar={hideNavBar}
				/>

				<Route name='Login' component={Login} schema='boot' initial hideNavBar title="Welcome" />
				<Route name='Register' component={Register} schema='main' title="Register Screen" />

				<Route name='Drawer' hideNavBar={true} type='reset'>
					<SideDrawer>
						<Router
							sceneStyle={styles.routerScene}
							navigationBarStyle={styles.navBar}
							titleStyle={styles.navTitle}
						>
							<Route name='Home' component={Screen_Home} schema='main' title='Home' />
							<Route name='Screen1' component={Screen1} schema='main' title='Screen1' />
							<Route name='Screen2' component={Screen2} schema='main' title='Screen2' />
						</Router>
					</SideDrawer>
				</Route>
			</Router>
		);
	}
}


const styles = StyleSheet.create({
	navBar: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'red',
	},
	navTitle: {
		color: 'white',
	},
	routerScene: {
		paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, // some navbar padding to avoid content overlap
	},
})

