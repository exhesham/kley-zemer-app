import React, {Component} from 'react';
import {Image, TouchableOpacity, View, StyleSheet, Text, DrawerLayoutAndroid, FlatList} from 'react-native';


export default class ProductItem extends Component {

	render() {
		return (
			<View style={styles.itemContainer}>
				<TouchableOpacity
					style={styles.touchContainter}
					onPress={()=>{
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
						<View style={styles.item_title_container}>
							<Text style={styles.item_title} numberOfLines={2}>{this.props.title}</Text>
						</View>
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
	},
	item_title_container: {
		marginRight: 1,
	},
	item_title: {
		width: 200,
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