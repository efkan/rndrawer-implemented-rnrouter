import React, {
  Component,
} from 'react'

import {
	StyleSheet,
	TouchableOpacity,
	Image,
} from 'react-native'

import { Navigator } from 'react-native-deprecated-custom-components'
import Login from './Login'
import Register from './Register'
import SideDrawer from './SideDrawer'
import ScreenHome from './ScreenHome'
import Screen1 from './Screen1'
import Screen2 from './Screen2'

import { Router, Route, Schema, Actions, } from 'react-native-router-flux'

/** Optional Redux section ******************************************/
/*  npm uninstall react-redux --save && npm uninstall redux --save  */

// import { createStore } from 'redux'
// import { Provider, connect } from 'react-redux'
// import RNRF from 'react-native-router-flux'
// var {Route, Schema, Animations, Actions, TabBar} = RNRF
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
//             console.log("BEFORE_POP:", action);
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

export default class Example extends Component {

	renderMenuButton = () => {
		return (
			<TouchableOpacity
				style={styles.leftButtonContainer}
				onPress={() => this.drawer.open()}
			>
				<Image
					source={require('./ic_menu_white_24dp.png')}
					style={{height: 24, width: 24}}
				/>
			</TouchableOpacity>
		)
	};

	renderBackButton = () => {
		return (
			<TouchableOpacity
				style={styles.leftButtonContainer}
				onPress={Actions.pop}
			>
				<Image
					source={require('./ic_arrow_back_white_24dp.png')}
					style={{height: 24, width: 24}}
				/>
			</TouchableOpacity>
		)
	};

	render() {
		return (
			<Router name='root'>

				<Schema
					name='boot'
					sceneConfig={Navigator.SceneConfigs.FloatFromRight}
					hideNavBar
					type='replace' // When type='replace' is existing Actions.pop never work
				/>

				<Route name='Login' component={Login} schema='boot' initial title="Welcome" />
				<Route name='Register' component={Register} hideNavBar title="Register Screen" />

				<Route name='Drawer' hideNavBar type='reset'>
					<SideDrawer ref={c => { c ? this.drawer = c.drawer : this.drawer }}>

					{
						/*Nested Routes are used for to manage the navbar cases (Route[Home] \ Router \ Route[Home_] )
						React-Native-Reouter-Flux actions use the route names.*/
					}

						<Router name='drawerRoot'
							sceneStyle={styles.routerScene}
							navigationBarStyle={styles.navBar}
							titleStyle={styles.navTitle}
						>
							<Schema
								name='home'
								sceneConfig={Navigator.SceneConfigs.FloatFromRight}
								hideNavBar={false}
								renderLeftButton={this.renderMenuButton}
							/>
							<Schema
								name='interior'
								sceneConfig={Navigator.SceneConfigs.FloatFromRight}
								hideNavBar={false}
								renderLeftButton={this.renderBackButton}
							/>

							<Route name='Home' component={ScreenHome} schema='home' title='Home' />
							<Route name='Screen1' component={Screen1} schema='interior' title='Screen1' />
							<Route name='Screen2' component={Screen2} schema='interior' title='Screen2' />

						</Router>
					</SideDrawer>
				</Route>
			</Router>
		)
	}
}


const styles = StyleSheet.create({
	navBar: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'green',
	},
	navTitle: {
		color: 'white',
	},
	routerScene: {
		paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, // some navbar padding to avoid content overlap
	},
	leftButtonContainer: {
		paddingLeft: 15,
		paddingRight: 20,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
})
