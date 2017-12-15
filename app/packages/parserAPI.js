import React, {Component} from 'react';

//const cheerio = require('cheerio');
var DomParser = require('react-native-html-parser').DOMParser
//var iconv = require('iconv-lite');


// export {getProductsOnline};

function convert_relevant_product_doms_to_json(dom) {

}

async function getKZPage(url)
{
	try {
		let response = await
		fetch(
			url
		);
		let responseContent = await
		response;
		return responseContent.content;
	} catch (error) {
		console.error(error);
	}
}

function  getProductsOnline(url)
{
	var html = this.getKZPage(url);
	// now we want to start parsing

	var products = this.convert_relevant_product_doms_to_json(html);
	console.log(products);
}

