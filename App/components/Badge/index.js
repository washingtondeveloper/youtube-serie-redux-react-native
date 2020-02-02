import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Badge() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>0</Text>
		</View>
	);
}
