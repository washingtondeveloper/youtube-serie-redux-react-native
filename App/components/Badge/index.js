import React from 'react';
import { View, Text } from 'react-native';

import { useSelector } from 'react-redux';

import styles from './styles';

export default function Badge() {
	const length = useSelector((state) => state.cart.length);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{length}</Text>
		</View>
	);
}
