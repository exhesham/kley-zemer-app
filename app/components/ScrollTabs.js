import React from 'react';
import {
	Text,
	View,
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import {Component} from "react";
import ProductsSection from "./ProductsSection";
import {getSectionCategory} from "../kzcrawler";

export default class ScrollTabs extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { goToProduct } = this.props.onProductPress;
		var children = [];
		var sectionCategories = this.props.sectionCategories;
		for(var key in sectionCategories){
			children.push(<ProductsSection
				onProductPress={(product)=>{
					console.log('ScrollTabs pressed item product:', product);
					this.props.onProductPress(product);
				}}
				key={key}
				section={this.props.section}
				category={sectionCategories[key].id}
				tabLabel={sectionCategories[key].title} />)
		}

		return (
			<ScrollableTabView renderTabBar={() => <ScrollableTabBar />}
			>
				{children}
			</ScrollableTabView>
		);
	}
}