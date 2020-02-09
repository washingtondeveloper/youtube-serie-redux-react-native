import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { allCars } from '../../store/fetchActions';

import { addItem } from '../../store/ducks/cart';

import Car from '../../components/Car';

export default function List() {
	const cars = useSelector((state) => state.cars);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(allCars());
		},
		[ cars, dispatch ]
	);

	function addItemCart(item) {
		dispatch(addItem(item));
	}

	return (
		<FlatList
			style={{ padding: 5 }}
			showsVerticalScrollIndicator={false}
			data={cars}
			keyExtractor={(item) => String(item._id)}
			renderItem={({ item }) => <Car item={item} addItemCart={addItemCart} />}
		/>
	);
}
