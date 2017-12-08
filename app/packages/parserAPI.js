import React, {Component} from 'react';

const cheerio = require('cheerio');
var DomParser = require('react-native-html-parser').DOMParser
var iconv = require('iconv-lite');


export {getProducts};

function convert_relevant_product_doms_to_json(dom)
{
	/*
	* This function will receive the whole page dom and start scanning it for relevant doms.
	* the relevant doms will be parsed and converted to json
	* */
	children_tostring(children)
	{
		var res = '';
		if (!children) {
			return res;
		}

		for (var i = 0; i < children.length; i++) {
			res += children[i].data ? children[i].data : '';
			res = res.trim();
		}
		return res;
	}

	var products = [];
	const $ = cheerio.load(dom);
	$('.ProductDisplayStyle2').each(function (i, elem) {

		// console.log($('.productPriceMarketTitle').text());
		// console.log($('.productPriceTitle').text());
		var product_url = $(this).find($("a img"))[0].parent.attribs['href'];
		var product_img_url = $(this).find($("a img"))[0].attribs['src'];
		var product_price1 = ' - ', product_price2 = ' - ', product_name = '';

		if ($(this).find($(".productPriceMarketTitle")).length != 0) {
			product_price1 = get_number(children_tostring($(this).find($(".productPriceMarketTitle"))[0].children), ' - ');
		}
		if ($(this).find($(".productPriceTitle")).length != 0) {
			product_price2 = get_number(children_tostring($(this).find($(".productPriceTitle"))[0].children), ' - ');
		}
		try {
			product_name = children_tostring($(this).find($(".ProductDisplayStyle2Name"))[0].children);
		} catch (e) {
			console.log('failed to get product name')
		}


		products.push({
			'product-url': product_url,
			'img-url': product_img_url,
			'name': product_name,
			'price-1': product_price1,
			'price-2': product_price2,
		});
	});
	return products;

}
function componentDidMount(html)
{
	let doc = new DomParser().parseFromString(html, 'text/html')
	return doc;

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

function  getProducts(url)
{
	var html = this.getKZPage(url);
	// now we want to start parsing

	var products = this.convert_relevant_product_doms_to_json(html);
	console.log(products);
}

