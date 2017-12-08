import React, {
	Component,
	View,
	Text,
	StyleSheet,
	TextInput,
	WebView,
} from 'react-native'

const cheerio = require('cheerio');
var DomParser = require('react-native-html-parser').DOMParser

export class KZParserApi extends Component {
	componentDidMount(html) {
		let doc = new DomParser().parseFromString(html, 'text/html')
		return doc;

	}

	async getKZPage(url) {
		try {
			let response = await fetch(
				url
			);
			let responseContent = await response;
			return responseContent.content;
		} catch (error) {
			console.error(error);
		}
	}

	getProducts(url){
		var html = this.getKZPage(url);
		// now we want to start parsing
		var doc = this.componentDidMount(html);
		var products = doc.querySelect('span[class="ProductDisplayStyle2"]');
		for(var i=0;i< products.length;i++){

		}
	}

}