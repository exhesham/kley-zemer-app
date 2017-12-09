import React, {Component} from 'react';
import {ToolbarAndroid, View, StyleSheet, Text, DrawerLayoutAndroid, FlatList} from 'react-native';

import {getSectionCategory} from "../kzcrawler";

export default class Navbar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (<ToolbarAndroid
			style={styles.toolbar}
			title=""
			onIconClicked={() => {
				this._openDrawer();
			}}
			rtl={true}
			logo={require("../images/logo.png")}
			navIcon={require("../images/menuIcon.png")}
			actions={[
				{title: "About", show: "never",}
			]}
			onActionSelected={(position)=>{
				if(position==0){
					this.props.selectedActionEvent('About');
				}
			}}
		/>);
	}

	_openDrawer() {
		this.props.openAppDrawer();
	}

	onActionSelected(position) {
		if (position === 0) { // index of 'Settings'
			showSettings();
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
