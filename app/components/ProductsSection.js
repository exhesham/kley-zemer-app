import React, { Component } from 'react';
import {AppRegistry, ToolbarAndroid,ScrollView, View, StyleSheet, Text, DrawerLayoutAndroid, FlatList} from 'react-native';
import Product from "./Product";

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
					renderItem={({item}) => <Product
						title={item.name}
						imageSrc={'http://kley-zemer.co.il/'+item['img-url']}
						price1={item['price-1']}
						price2={item['price-2']}
					/>}
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
		backgroundColor: '#B12228'
	},
});
