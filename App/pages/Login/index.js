import React, { useState } from 'react';
import { View } from 'react-native';

import Form from '../../components/Form';
import Title from '../../components/Title';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../store/fetchActions';

export default function Login() {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const dispatch = useDispatch();

	function submit() {
		dispatch(authLogin({ username, password }));

		setPassword('');
		setUsername('');
	}

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
			<Title text="Login" />
			<Form
				textSubmit="LOGIN"
				submit={submit}
				inputs={[
					{
						placeholder: 'Login',
						onChangeText: setUsername,
						value: username,
						autoCapitalize: 'none'
					},
					{
						placeholder: 'Senha...',
						onChangeText: setPassword,
						secureTextEntry: true,
						value: password
					}
				]}
			/>
		</View>
	);
}
