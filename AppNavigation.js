import React from 'react';
import {StackNavigator} from 'react-navigation'
import About from './app/components/About'
import DrawerList from "./app/components/DrawerList";
import Home from "./app/components/Home";
import ProductWeb from "./app/components/ProductWeb";
import ScrollTabs from "./app/components/ScrollTabs";
import Search from "./app/components/Search";

/***
 * this window maps the pages to be accessible for the navigator
 */
const AppNavigation = StackNavigator({

	Home: {
		screen: Home,
		navigationOptions: {
			header: null
		}
	},
	ScrollTabs:{
		screen:ScrollTabs
	},
	About: {
		screen: About
	},
	ProductWeb: {
		screen: ProductWeb
	},
	Search: {
		screen: Search,

		header:null
	},
});

export default AppNavigation
