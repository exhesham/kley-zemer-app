import React from 'react';
import {
	Text,
	View,
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import {Component} from "react";
import ProductsSection from "./ProductsSection";

export default class ScrollTabs extends Component {

	render() {
		var children = [];
		var sectionCategories = this.props.sectionCategories;
		for(var key in sectionCategories){
			children.push(<ProductsSection  section={this.props.section} category={sectionCategories[key].id} tabLabel={sectionCategories[key].title} />)
		}

		return (
			<ScrollableTabView renderTabBar={() => <ScrollableTabBar />}
			>
				{children}
			</ScrollableTabView>
		);
	}
}