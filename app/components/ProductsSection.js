import React, { Component } from 'react';
import {AppRegistry, ToolbarAndroid,ScrollView, View, StyleSheet, Text, DrawerLayoutAndroid, FlatList} from 'react-native';
import ProductItem  from "./ProductItem";

import { loadProducts }  from '../kzcrawler';

export default class ProductsSection extends Component {
	getProducts(section,category){
		console.log('getting products',section,category);
		return loadProducts(section,category)
	}
	render() {
		return (
			<View style={styles.container}>

				<FlatList
					data={this.getProducts(this.props.section,this.props.category)}
					renderItem={({item}) => <ProductItem
						onProductPress={(product_data)=>{
							this.props.onProductPress(product_data)}}
						key={item['product-url']}
						title={item.name}
						imageSrc={'http://kley-zemer.co.il/'+item['img-url']}
						price1={item['price-1']}
						price2={item['price-2']}
						product_url={item['product-url']}
					/>}
				/>
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
});
