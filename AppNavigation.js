import React from 'react';
import {StackNavigator} from 'react-navigation'
import About from './app/components/About'
import DrawerList from "./app/components/DrawerList";
import Home from "./app/components/Home";
import {} from 'react-native';

const AppNavigation = StackNavigator({

	Home: {
		screen: Home,
		navigationOptions: {
			header: null
		}
	},
	About: {
		screen: About
	},
	Drawer: {
		screen: DrawerList
	},
});

export default AppNavigation