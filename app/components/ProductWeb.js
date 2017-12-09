import React, { Component } from 'react';
import { WebView } from 'react-native';

class ProductWeb extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<WebView
				source={{uri: this.props.product_uri}}
				style={{marginTop: 20}}
			/>
		);
	}
}