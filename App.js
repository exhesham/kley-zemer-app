/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, AppRegistry} from 'react-native';
import Navbar from "./app/components/Navbar";

import ScrollTabs from "./app/components/ScrollTabs";
import {getSectionCategory} from './app/kzcrawler';
import DrawerList from "./app/components/DrawerList";
import Home from "./app/components/Home";
import AppNavigation from "./AppNavigation";

export default class App extends Component<{}> {
	static navigationOptions = {
		title: 'Welcome',
	};
	constructor(props) {
		super(props);

	}

	render() {

		return (
			<View style={styles.container}>
				<AppNavigation/>
			</View>
		);
	}

}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
		backgroundColor: '#B12228'
	},
	toolbar: {
		backgroundColor: '#B12228',
		height: 56,
		alignSelf: 'stretch',

	},
});

// AppRegistry.registerComponent('App', () => App);