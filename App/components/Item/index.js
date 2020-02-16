import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import { MaterialIcons } from '@expo/vector-icons';

export default function Item({ item, removeItemCart }) {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: item.url }} />
			<View style={styles.description}>
				<Text style={styles.title}>Nome do Carro</Text>
				<Text style={styles.titleName}>{item.name}</Text>
			</View>
			<TouchableOpacity style={styles.btn} onPress={() => removeItemCart(item)}>
				<MaterialIcons name="remove-shopping-cart" color="#ff0000" size={24} />
			</TouchableOpacity>
		</View>
	);
}
