/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, DrawerLayoutAndroid} from 'react-native';
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
		this.state = {
			currentProduct: <ScrollTabs section={'guitars'} sectionCategories={getSectionCategory('guitars')}/>
		};
	}

	render() {

		return (
			<View style={styles.container}>
				<AppNavigation/>
			</View>
		);
	}

	/**
	 * show the pressed section
	 * @param param
	 */
	productNavigate(param) {
		console.log('productNavigate', param.section.id)
		var selectedProduct = <ScrollTabs section={param.section.id} sectionCategories={getSectionCategory(param.section.id)}/>
		this.setState(previousState => {
			return { currentProduct: selectedProduct };
		});
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

