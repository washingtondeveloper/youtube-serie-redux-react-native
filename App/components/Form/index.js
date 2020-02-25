import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Form({ inputs, textSubmit, submit }) {
	return (
		<View style={styles.form}>
			{inputs.map((input, index) => (
				<TextInput key={index} {...input} style={styles.input} placeholderTextColor="#999" />
			))}
			<TouchableOpacity style={styles.btn} onPress={submit}>
				<Text style={styles.btnText}>{textSubmit}</Text>
			</TouchableOpacity>
		</View>
	);
}
