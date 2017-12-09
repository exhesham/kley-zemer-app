import React, {Component} from 'react';
import {

	ToolbarAndroid,
	View,
	TouchableOpacity,
	Image,
	Text,
	FlatList, StyleSheet
} from 'react-native';

import {getProductsSections} from "../kzcrawler";


export default class DrawerList extends Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	constructor(props) {
		super(props);

	}

	render() {

		var navigationView = (
			<View style={styles.container}>
				<View>
					<Image style={styles.headerImage} source={require('../images/banner.jpg')}/>
				</View>
				<FlatList
					data={getProductsSections()}
					renderItem={({item}) =>
						<TouchableOpacity style={styles.sectionHeadingStyle}
						                  key={item.title}
						                  onPress={() => {
							                  console.log('will open the about button');
						                  	this.props.onPressEvent({section: item})
						                  }
						                  }>
							<Text>{item.title}</Text>
						</TouchableOpacity>
					}
				></FlatList>
				<View style={styles.footerContainer}>
					<TouchableOpacity style={styles.sectionHeadingStyle}
					                  onPress={() => this.props.onPressEvent('About')}
					>
						<Text>About ThunderClouding Apps</Text>
					</TouchableOpacity>
				</View>
			</View>

		);
		return navigationView;
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	navItemStyle: {
		padding: 10
	},
	navSectionStyle: {
		backgroundColor: 'lightgrey'
	},
	headerImage: {
		flex: 1,
		width: null,
		height: null,
		padding: 50,
		// resizeMode: 'contain'
	},
	touchableStyle:{
		flex:1,
		backgroundColor:'yellow'
	},
	sectionHeadingStyle: {
		paddingVertical: 16,
		paddingHorizontal: 14,
		flex:1,
		fontSize: 15,
		fontWeight: 'bold',
		textAlign: 'left'

	},
	footerContainer: {
		padding: 20,
		backgroundColor: 'lightgrey'
	}
});