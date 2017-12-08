import React, {Component} from 'react';
import {Image, TouchableOpacity, View, StyleSheet, Text, DrawerLayoutAndroid, FlatList} from 'react-native';


export default class Product extends Component {

	render() {
		return (
			<View >
				<TouchableOpacity style={{flex: 1, flexDirection: 'row'}}>
					<View>
						<Image
							source={{uri: this.props.imageSrc}}
							style={{width: 80, height: 80}}
						/>
					</View>
					<View>
						<Text style={styles.item_title}>{this.props.title}</Text>
						<Text style={styles.item_price1}>Credit: {this.props.price1}</Text>
						<Text style={styles.item_price2}>Cash: {this.props.price2}</Text>
					</View>
				</TouchableOpacity>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	item_title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
	},
	item_price1: {
		color: 'white',
		fontSize: 12,
	},
	item_price2: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 12,
	},
	red: {
		color: 'red',
	},
});
