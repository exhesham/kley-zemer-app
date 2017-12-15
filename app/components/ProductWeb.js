import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class  ProductWeb extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { params } = this.props.navigation.state;
		var uri = 'http://kley-zemer.co.il/'+params.product_uri;
		console.log(params)
		console.log(typeof(params))
		if (typeof(params) === 'string' ){
			
			uri = params;
		}

		return (
			<WebView
				domStorageEnabled={true}
				source={{uri: uri}}

			/>
		);
	}
}