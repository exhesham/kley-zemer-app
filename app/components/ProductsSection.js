import React, { Component } from 'react';
import {AppRegistry, ToolbarAndroid,ScrollView, View, StyleSheet, Text, DrawerLayoutAndroid, FlatList} from 'react-native';
import ProductItem  from "./ProductItem";

import { loadProducts }  from '../kzcrawler';

export default class ProductsSection extends Component {
	getProducts(section,category,filter){
		if(filter != undefined && filter.length >0){
			console.log('will return filtered products')
			return filter
		}else {
			console.log('getting products for '+ section +'/' + category);
			return loadProducts(section, category)
		}
	}
	render() {
		var products = this.getProducts(this.props.section,this.props.category, this.props.filter);
		var listViewResult = <Text style={styles.noProducts}>No Products for this category</Text>
		if(products && products.length > 0) {       // display the products only if there is any
			listViewResult = (<FlatList
				data={products}
				renderItem={({item}) => <ProductItem
					onProductPress={(product_data) => {
						this.props.onProductPress(product_data)
					}}
					key={item['product-url']}
					title={item.name}
					imageSrc={'http://kley-zemer.co.il/' + item['img-url']}
					price1={item['price-1']}
					price2={item['price-2']}
					product_url={item['product-url']}
				/>}
			/>);
		}
		return (
			<View style={styles.container}>
				{listViewResult}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 3,
		backgroundColor: '#B12228'
	},
	noProducts:{
		fontSize:15,
		padding:8,
		color:'#ffffff',
	},
});
