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
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';
export const tracker = new GoogleAnalyticsTracker('UA-111279929-1');
if(tracker && tracker.trackScreenView){
	try{
		tracker.trackScreenView('HomeConstructor');
	}catch(e){
		console.error('failed to send to google analytics because:' + e + 'the value of tracker is:'+ tracker)

	}

}
export default class Home extends Component<{}> {

	constructor(props) {
		super(props);
		this.state = {
			currentProduct: <ScrollTabs
				section={'guitars'}
				onProductPress={(product) => {
					this.productOpenWeb(product)
				}}
				sectionCategories={getSectionCategory('guitars')}/>
		};

	}

	render() {


		const {navigate} = this.props.navigation;
		return (
			<View style={styles.container}>
				<DrawerLayoutAndroid
					ref={(_drawer) => this.drawer = _drawer}
					drawerWidth={300}
					drawerPosition={DrawerLayoutAndroid.positions.Left}
					renderNavigationView={() => <DrawerList
						navigation={navigate}
						onPressEvent={(sectionObject) => {
							this.productNavigate(sectionObject)
						}}/>}>
					<View style={{flex: 1, alignItems: 'center'}}>
						<Navbar
							selectedActionEvent={(action)=>{
								this.props.navigation.navigate(action)
							}}
							selectedWebviewEvent={(action)=>{
								this.props.navigation.navigate('ProductWeb',action)
							}}
							openAppDrawer={() => {
							this.drawer.openDrawer();
						}}/>
						{this.state.currentProduct}
					</View>
				</DrawerLayoutAndroid>
			</View>
		);
	}
	productOpenWeb(param) {
		console.log('productOpenWeb:', param)
		this.props.navigation.navigate('ProductWeb',{'product_uri':param})
		this.drawer.closeDrawer();
	}

	/**
	 * show the pressed section
	 * @param param
	 */
	productNavigate(param) {
		if (param == 'About') {
			this.props.navigation.navigate(param)

		} else {
			console.log('productNavigate', param.section.id)
			var selectedProduct = <ScrollTabs
				section={param.section.id}
				sectionCategories={getSectionCategory(param.section.id)}
				onProductPress={(product) => {
					this.productOpenWeb(product)
				}}

			/>
			this.setState(previousState => {
				return {currentProduct: selectedProduct};
			});
		}

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

