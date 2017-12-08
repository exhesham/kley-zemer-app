import React from 'react';
import {
	Text,
	View,
} from 'react-native';

import {Component} from "react";

export default class ScrollTabs extends Component {

	render() {

		return (
			<View>
				<Text>About</Text>

				<Text>Designed and built by:</Text>
				<Text>Hesham Yassin</Text>
				<Text>Bassam Yassin</Text>
				<Text>Thunderclouding Apps</Text>

				<Text>https://exhesham.com</Text>
			</View>
		);
	}
}