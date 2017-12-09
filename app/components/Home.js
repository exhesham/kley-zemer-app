/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, DrawerLayoutAndroid} from 'react-native';
import Navbar from "./Navbar";

import ScrollTabs from "./ScrollTabs";
import {getSectionCategory} from '../kzcrawler';
import DrawerList from "./DrawerList";



export default class Home extends Component<{}> {


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

					<DrawerLayoutAndroid
						ref={(_drawer) => this.drawer = _drawer}
						drawerWidth={300}
						drawerPosition={DrawerLayoutAndroid.positions.Left}
						renderNavigationView={() => <DrawerList onPressEvent={(sectionObject) => {
							this.productNavigate(sectionObject)
						}}/>}>
						<View style={{flex: 1, alignItems: 'center'}}>
							<Navbar openAppDrawer={() => {
								this.drawer.openDrawer();
							}}/>
							{this.state.currentProduct}
						</View>
					</DrawerLayoutAndroid>
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

		backgroundColor: '#B12228'
	},
	toolbar: {
		backgroundColor: '#B12228',
		height: 56,
		alignSelf: 'stretch',

	},
});

