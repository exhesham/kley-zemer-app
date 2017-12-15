import React from 'react';
import {
	Text,
	StyleSheet,
	View,
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
				<View  style={styles.centered}>
					<Text style={styles.names}>Hesham Yassin</Text>
					<Text style={styles.names}>Bassam Yassin</Text>
				</View>
				<Text style={{paddingTop: 20, fontWeight:'bold'}}>Thunderclouding Apps</Text>

				<Text
					style={styles.hyperlink}
					onPress={() => Linking.openURL('https://exhesham.com')}
				>https://exhesham.com</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 20
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