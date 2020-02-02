import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Cart() {
	return (
		<View style={styles.container}>
			<Text style={styles.textMessage}>Sem produtos no carrinho</Text>
		</View>
	);
}
