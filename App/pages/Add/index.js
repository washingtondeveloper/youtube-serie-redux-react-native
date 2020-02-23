import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useDispatch } from 'react-redux';
import { fetchAddCar } from '../../store/fetchActions';
import { showMessage } from 'react-native-flash-message';

import styles from './styles';

export default function Add() {
	const [ name, setName ] = useState('');
	const [ url, setUrl ] = useState('');

	const dispatch = useDispatch();

	function submit() {
		dispatch(fetchAddCar({ name, url }));

		setName('');
		setUrl('');
	}

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<TextInput
					onChangeText={setName}
					placeholder="Nome..."
					style={styles.input}
					placeholderTextColor="#999"
					value={name}
				/>
				<TextInput
					onChangeText={setUrl}
					placeholder="https://image"
					style={styles.input}
					placeholderTextColor="#999"
					value={url}
				/>
				<TouchableOpacity style={styles.btn} onPress={submit}>
					<Text style={styles.btnText}>ADICIONAR</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
