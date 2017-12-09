import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class  ProductWeb extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { params } = this.props.navigation.state;
		return (
			<WebView
				domStorageEnabled={true}
				source={{uri: 'http://kley-zemer.co.il/'+params.product_uri}}

			/>
		);
	}
}