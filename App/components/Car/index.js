import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

export default function Car({ item, addItemCart }) {
	return (
		<View style={styles.container}>
			<Image
				style={{
					width: '100%',
					height: 200
				}}
				source={{
					uri: item.url
				}}
			/>
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
				<Text style={styles.carTextName}>{item.name}</Text>
				<TouchableOpacity style={styles.carBtn} onPress={() => addItemCart(item)}>
					<MaterialIcons name="add-shopping-cart" color="#fff" size={24} />
				</TouchableOpacity>
			</View>
		</View>
	);
}
