import React from 'react';
import { FlatList, View } from 'react-native';

import Car from '../../components/Car';

const cars = [
	{
		id: 1,
		name: 'Audi',
		url:
			'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	},

	{
		id: 2,
		name: 'BMW',
		url: 'https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
	},

	{
		id: 3,
		name: 'Ferrari',
		url:
			'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	}
];

export default function List() {
	return (
		<FlatList
			style={{ padding: 5 }}
			showsVerticalScrollIndicator={false}
			data={cars}
			keyExtractor={(item) => String(item.id)}
			renderItem={({ item }) => <Car item={item} />}
		/>
	);
}
