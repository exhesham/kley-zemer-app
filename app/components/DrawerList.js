import React, {Component} from 'react';
import {AppRegistry, ToolbarAndroid, View, TouchableOpacity,Image, Text, DrawerLayoutAndroid, FlatList} from 'react-native';

import styles from "../styles/sideMenuStyle";
import {getProductsSections} from "../kzcrawler";

export default class DrawerList extends Component {

	render() {
		var navigationView = (

			<View style={styles.container}>
				<View >
					<Image style={styles.headerImage} source={require('../images/banner.jpg')}/>
				</View>
				<FlatList
					data={getProductsSections()}
					renderItem={({item}) =>
						<TouchableOpacity  style={styles.sectionHeadingStyle}
						                   key={item.title}
						                   onPress={() => this.props.onPressEvent({ section: item })}
						                   style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
						<Text >{item.title}</Text>
						</TouchableOpacity>
					}
				></FlatList>
				<Text>About</Text>
				<View style={styles.footerContainer}>
					<Text>ThunderClouding Apps</Text>
				</View>
			</View>

		);
		return navigationView;
	}

}
