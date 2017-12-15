import React, {Component} from 'react';
import {ToolbarAndroid, View, StyleSheet, Text, DrawerLayoutAndroid, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {getProductsOnline} from '../packages/parserAPI';

export default class Navbar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (<Icon.ToolbarAndroid
			style={styles.toolbar}
			title=""
			onIconClicked={() => {
				this._openDrawer();
			}}
			rtl={true}
			logo={require("../images/logo.png")}
			navIconName='md-menu'
			actions={[
				{title: "About", show: "never", iconName:'md-trophy'},
				{title: "Sync", show: "always",showWithText:false, iconName:'md-thumbs-up'},
				{title: "Search", show: "always",showWithText:false, iconName:'md-search'},
			]}
			onActionSelected={(position)=>{
				if(position==0){
					this.props.selectedActionEvent('About');
				}
				if(position==1){
					this.props.selectedWebviewEvent('https://paypal.me/heshamrasheedyassin')
				}
				if(position==2){
					this.props.selectedActionEvent('Search')
				}
			}}
		/>);
	}

	_openDrawer() {
		this.props.openAppDrawer();
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
