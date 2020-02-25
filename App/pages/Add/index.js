import React, { useState } from 'react';
import { View } from 'react-native';

import Form from '../../components/Form';
import { useDispatch } from 'react-redux';
import { fetchAddCar } from '../../store/fetchActions';

import styles from './styles';
import Title from '../../components/Title';

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
			<Title text="Cadastro" />
			<Form
				textSubmit="ADICIONAR"
				submit={submit}
				inputs={[
					{
						onChangeText: setName,
						placeholder: 'Nome...',
						value: name
					},
					{
						onChangeText: setUrl,
						placeholder: 'https://images...',
						value: url
					}
				]}
			/>
		</View>
	);
}
