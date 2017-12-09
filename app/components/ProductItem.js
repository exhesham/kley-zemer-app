import React, {Component} from 'react';
import {Image, TouchableOpacity, View, StyleSheet, Text, DrawerLayoutAndroid, FlatList} from 'react-native';


export default class ProductItem extends Component {

	render() {
		return (
			<View style={styles.itemContainer}>
				<TouchableOpacity
					style={styles.touchContainter}
					onPress={()=>{
						console.log('pressed the item....')
						this.props.onProductPress(this.props.product_url)
						}
					}
					>
					<View style={styles.imageContainer}>
						<Image
							source={{uri: this.props.imageSrc}}
							style={styles.image}
						/>
					</View>
					<View style={styles.textContainer}>
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
	itemContainer: {
		marginBottom: 3,
		borderWidth: 2,
		borderColor: '#f2f4f7',
		backgroundColor: '#2f3133',
		borderRadius: 5,
	},
	touchContainter: {flex: 1, flexDirection: 'row'},
	image: {
		width: 90,
		height: 90,

	},
	imageContainer: {
		padding: 3,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	textContainer: {
		paddingLeft: 5,
		alignContent: 'center',
		justifyContent: 'center',
	},
	item_title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 15,
	},
	item_price1: {
		color: 'white',
		fontSize: 11,
	},
	item_price2: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 11,
	},
});