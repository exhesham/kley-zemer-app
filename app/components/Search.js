import React from 'react';
import {
	Text,
	StyleSheet,
	View, TextInput,
} from 'react-native';

import {Component} from "react";
import {Toolbar} from 'react-native-material-ui';
import {COLOR, ThemeProvider} from 'react-native-material-ui';
import {filterQuery, getSectionCategory} from "../kzcrawler";
import ScrollTabs from "./ScrollTabs";


// icons can be found at: https://oblador.github.io/react-native-vector-icons/
export default class About extends Component {
	static navigationOptions = {
		title: "", header: null


	};

	constructor(props) {
		super(props);
		this.state = {text: 'guitars', queryResults:[],queryScreen:<Text>No results were queried...</Text>};
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
		var filteredRes = filterQuery(e);
		var displayRes = <Text>No results were found for ${e}...</Text>
		if(filteredRes.length > 0){
			displayRes =  <ScrollTabs
				section={'guitars'}
				onProductPress={(product) => {

					this.props.navigation.navigate('ProductWeb',{'product_uri':product})
				}}
				sectionCategories={filteredRes}/>
		}
		this.setState(previousState => {
			return { queryScreen: displayRes};
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
	titleText: {
		fontSize: 30,
		paddingBottom: 3,
		fontWeight: 'bold',
	},
	hyperlink: {
		fontSize: 20,
		color: 'blue',
	},
	names: {
		fontWeight: 'bold',

	},
	centered: {

		alignItems: 'center',
	}
});