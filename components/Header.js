import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

import Colors from '../constants/colors';
import TitleText from '../components/TitleText';


const Header = props => {
	return (
		<View style={styles.header}>
			<TitleText style={styles.headerFont}>{props.title}</TitleText>
		</View>
	)
};



const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerFont: {
		// color: Colors.primary
	}
});
export default Header;