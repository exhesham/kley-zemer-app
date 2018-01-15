import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	Linking,
} from 'react-native';

import {Component} from "react";
import Icon from 'react-native-vector-icons/Ionicons';

export default class About extends Component {
	static navigationOptions = {
		title: 'About Us',
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.titleText}>About</Text>

				<Text>Designed and built by:</Text>
				<View style={styles.centered}>
					<Icon name="md-thunderstorm" color="#4F8EF7" size={80}/>
					<Text style={styles.h2Text} onPress={() => Linking.openURL('https://exhesham.com')}>ThunderClouding Apps</Text>
					<View style={styles.flexRow}>
						<Icon style={styles.icons} name="md-call" color="#4F8EF7" size={60} onPress={() => Linking.openURL('tel:052')}/>
						<Icon style={styles.icons} name="md-bug" color="#F5B7B1" size={60} onPress={() => Linking.openURL('https://github.com/exhesham/kley-zemer-app/issues/new')}/>
						<Icon style={styles.icons} name="md-globe" color="#A9DFBF" size={60} onPress={() => Linking.openURL('https://exhesham.com')}/>
						<Icon style={styles.icons} name="md-at" color="#F6DDCC" size={60} onPress={() => Linking.openURL('mailto:exhesham@gmail.com')}/>
						{/*<Icon name="facebook" color="#2471A3" size={80} onPress={() => Linking.openURL('https://www.facebook.com/exhesham/')}/>*/}
						{/*<Icon name="paypal" color="#A9CCE3" size={80} onPress={() => Linking.openURL('https://paypal.me/heshamrasheedyassin/14')}/>*/}
						{/*<Icon name="linkedin" color="#5DADE2" size={80} onPress={() => Linking.openURL('https://www.linkedin.com/in/hesham-yassin-a5a869b0/')}/>*/}
					</View>

					<Text style={styles.hyperlink} onPress={() => Linking.openURL('https://exhesham.com')}>exhesham.com</Text>
				</View>
				<Text style={{paddingTop: 20, fontWeight: 'bold'}}>Thunder Clouding Apps</Text>
				<Text>This App is categorized under the Thunder Clouding projects. built as a demo - nothing else. don't assume the quality or the recommendation for this store by any means.</Text>
				<Text> </Text>
				<Text> </Text>
				<View style={styles.flexRowCenter}>
					<Text
						style={styles.baseTextBold}
						onPress={() => Linking.openURL('https://github.com/exhesham/kley-zemer-app')}
					><Icon name="md-cafe" color="#8B4513" size={20}/> Click to visit the open-source  <Icon name="md-cafe" color="#8B4513" size={20}/></Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor:'white',
		paddingLeft: 20,
		flex: 1,
	},
	icons:{
		paddingLeft:10
	},
	flexRow: {
		flexDirection: 'row'
	},
	flexRowCenter: {
		justifyContent: 'center',
		flexDirection: 'row'
	},
	baseText: {
		fontFamily: 'Cochin',

	},
	baseTextBold: {
		fontFamily: 'Cochin',
		fontWeight: 'bold',

	},
	titleText: {
		fontSize: 30,
		paddingBottom: 3,
		fontWeight: 'bold',
	},
	h2Text: {
		fontSize: 25,
		paddingBottom: 3,
		fontWeight: 'bold',
	},
	hyperlink: {
		fontSize: 20,
		color: 'blue',
	},
	links: {
		fontWeight: 'bold',
		fontSize: 19,

	},
	names: {
		fontWeight: 'bold',
		fontSize: 25,

	},
	centered: {

		alignItems: 'center',
	}
});