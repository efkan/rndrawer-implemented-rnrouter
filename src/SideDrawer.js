import React, { Text, View, Component, PropTypes } from 'react-native';
import Drawer from 'react-native-drawer';

var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;

class SideDrawerContent extends Component {

	static contextTypes = {
		drawer: PropTypes.object.isRequired,
	};

	render() {
		const { drawer } = this.context;
		return (
			<View>
				<Button onPress={() => { Actions.Drawer.call(); } }>Home</Button>
				<Button onPress={() => { Actions.Screen1.call(); drawer.close(); } }>Screen 1</Button>
				<Button onPress={() => { Actions.Screen2.call(); drawer.close(); } }>Screen 2</Button>
				<Button onPress={() => { Actions.Login.call(); } }>Logout</Button>
			</View>
		);
	}
}

export default class SideDrawer extends Component {

  render() {
    return (
			<Drawer
        type="overlay"
        content={<SideDrawerContent />}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
				styles={drawerStyles}
        tweenHandler={(ratio) => ({ main: { opacity: (2 - ratio) / 2 } })}
      >
        {React.Children.map(this.props.children, c => React.cloneElement(c, {
          route: this.props.route
        }))}
      </Drawer>
    )
  }

}

var drawerStyles = {
	drawer: { backgroundColor: '#ffffff' },
	main: { paddingLeft: 3 }
};
