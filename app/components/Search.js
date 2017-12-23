import React from 'react';
import {
	Text,
	StyleSheet,
	View, TextInput, ActivityIndicator,
} from 'react-native';

import {Component} from "react";
import {Toolbar} from 'react-native-material-ui';
import {COLOR, ThemeProvider} from 'react-native-material-ui';
import {filterQuery, getSectionCategory} from "../kzcrawler";
import ScrollTabs from "./ScrollTabs";
import ProductsSection from "./ProductsSection";


// icons can be found at: https://oblador.github.io/react-native-vector-icons/
export default class About extends Component {
	static navigationOptions = {
		title: "", header: null


	};

	constructor(props) {
		super(props);
		this.state = {text: null, queryScreen:<Text>No results were queried...</Text>};
	}

	render() {
		return (
			<ThemeProvider  uiTheme={uiTheme}>
				<View style={styles.background}>
					<Toolbar
						leftElement="home"
						onLeftElementPress={()=>{
							this.props.navigation.navigate('Home')
						}}
						centerElement="Search here..."
						searchable={{
							autoFocus: true,
							placeholder: 'Search',
							onSearchClosed: ()=>{
								this.clean_search_feed()
							},
							onSearchPressed: () => {
								this._userInputQuery(this.state.text);
							},
							onSubmitEditing: () => {
								this._userInputQuery(this.state.text);
							},

							onChangeText: (e) => {
								this.state.text = e;
							}
						}}

					/>

				</View>
				{this.state.queryScreen}
			</ThemeProvider>
		);
	}

	_userInputQuery(e) {
		console.debug(e)
		if(!e){
			return;
		}
		// first display activity indicator
		this.show_waiting_feed();
		var displayRes = <Text>No results were found for ${e}...</Text>
		var filteredRes = filterQuery(e);
		if(filteredRes.length > 0){
			displayRes =<ProductsSection
				onProductPress={(product)=>{
					console.debug('navigating to product: ' + product)
					this.props.navigation.navigate('ProductWeb',{'product_uri':product})
				}}
				filter={filteredRes}
			/>
		}
		this.setState(previousState => {
			return { queryScreen: displayRes};
		});


	}
	show_waiting_feed() {
		console.log('showing text in close event ')
		this.state = {text: null, queryScreen:<ActivityIndicator size="large" color="#0000ff" />};
		this.setState(previousState => {
			return { queryScreen: <ActivityIndicator size="large" color="#0000ff" />};
		});
	}
	clean_search_feed() {
		console.log('showing text in close event ')
		this.state = {text: null, queryScreen:<Text>No results were queried...</Text>};
		this.setState(previousState => {
			return { queryScreen: <Text>No results were queried...</Text>};
		});
	}
}

// you can set your style right here, it'll be propagated to application
const uiTheme = {
	palette: {
		primaryColor: '#B12228',
	},
	toolbar: {
		container: {
			height: 50,
		},
	},
};

const styles = StyleSheet.create({
	searchBox: {height: 40, borderColor: 'gray', borderWidth: 1},
	background: {
		backgroundColor: '#B12228'
	},
	baseText: {
		fontFamily: 'Cochin',

	},
	names: {
		fontWeight: 'bold',

	},
	centered: {

		alignItems: 'center',
	}
});