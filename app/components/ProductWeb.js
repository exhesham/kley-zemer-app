import React, {Component} from 'react';
import {ActivityIndicator, WebView, StyleSheet} from 'react-native';

export default class ProductWeb extends Component {
	constructor(props) {
		super(props);
	}

	ActivityIndicatorLoadingView() {

		return (

			<ActivityIndicator
				color='#009688'
				size='large'
				style={styles.ActivityIndicatorStyle}
			/>
		);
	}

	render() {
		const {params} = this.props.navigation.state;
		var uri = 'http://kley-zemer.co.il/' + params.product_uri;
		console.log(params)
		console.log(typeof(params))
		if (typeof(params) === 'string') {

			uri = params;
		}

		return (
			<WebView
				javaScriptEnabled={true}
				domStorageEnabled={true}
				renderLoading={this.ActivityIndicatorLoadingView}
				startInLoadingState={true}
				domStorageEnabled={true}
				source={{uri: uri}}
			/>
		);
	}
}
const styles = StyleSheet.create(
	{

		WebViewStyle:
			{
				justifyContent: 'center',
				alignItems: 'center',
				flex: 1,
				marginTop: 20
			},

		ActivityIndicatorStyle: {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			alignItems: 'center',
			justifyContent: 'center'

		}
	});