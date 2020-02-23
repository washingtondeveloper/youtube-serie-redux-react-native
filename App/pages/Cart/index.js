import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/ducks/cart';
import Item from '../../components/Item';

import { showMessage } from 'react-native-flash-message';

import styles from './styles';

export default function Cart() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	function removeItemCart(item) {
		dispatch(removeItem(item._id));

		showMessage({
			message: `${item.name} excluido com sucesso`,
			type: 'warning'
		});
	}

	return (
		<React.Fragment>
			{cart.length > 0 ? (
				<FlatList
					style={{ padding: 10 }}
					keyExtractor={(item) => String(item._id)}
					data={cart}
					renderItem={({ item }) => <Item item={item} removeItemCart={removeItemCart} />}
				/>
			) : (
				<View style={styles.container}>
					<Text style={styles.textMessage}>Sem produtos no carrinho</Text>
				</View>
			)}
		</React.Fragment>
	);
}
