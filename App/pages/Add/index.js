import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Add() {
	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<TextInput placeholder="Nome..." style={styles.input} placeholderTextColor="#999" />
				<TextInput placeholder="https://image" style={styles.input} placeholderTextColor="#999" />
				<TouchableOpacity style={styles.btn}>
					<Text style={styles.btnText}>ADICIONAR</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
