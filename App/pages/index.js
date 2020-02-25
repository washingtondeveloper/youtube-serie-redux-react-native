import React from 'react';
import { View, Text } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Add from './Add';
import List from './List';
import Cart from './Cart';
import Login from './Login';

import Bagde from '../components/Badge';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabHomeNavigation = () => (
	<Tab.Navigator
		tabBarOptions={{
			style: {
				paddingVertical: 3,
				backgroundColor: '#03a9f4'
			},
			inactiveTintColor: '#bbb',
			activeTintColor: '#fff',
			labelStyle: {
				fontSize: 14
			}
		}}
	>
		<Tab.Screen
			options={{
				tabBarIcon: ({ color }) => <MaterialIcons name="directions-car" size={24} color={color} />
			}}
			name="Carros"
			component={List}
		/>
		<Tab.Screen
			options={{
				tabBarIcon: ({ color }) => <MaterialIcons name="add" size={24} color={color} />
			}}
			name="Adicionar"
			component={Add}
		/>
		<Tab.Screen
			options={{
				tabBarIcon: ({ color }) => <MaterialIcons name="account-circle" size={24} color={color} />
			}}
			name="Login"
			component={Login}
		/>
		<Tab.Screen
			options={{
				tabBarIcon: ({ color }) => (
					<View>
						<MaterialIcons name="add-shopping-cart" size={24} color={color} />
						<Bagde />
					</View>
				)
			}}
			name="Carrinho"
			component={Cart}
		/>
	</Tab.Navigator>
);

function App() {
	return (
		<NavigationNativeContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: '#03a9f4'
					},
					headerTitle: <Text style={{ fontSize: 23, color: '#fff', fontWeight: 'bold' }}>Shoppging Car</Text>
				}}
			>
				<Stack.Screen name="Home" component={tabHomeNavigation} />
			</Stack.Navigator>
		</NavigationNativeContainer>
	);
}

export default App;
