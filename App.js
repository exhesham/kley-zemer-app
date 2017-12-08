/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, DrawerLayoutAndroid} from 'react-native';
import Navbar from "./app/components/Navbar";

import ScrollTabs from "./app/components/ScrollTabs";
import {getSectionCategory, getSectionManufacture, getProductsSections} from './app/kzcrawler';
import DrawerList from "./app/components/DrawerList";
import theme from "./app/theme";

export default class App extends Component<{}> {
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

