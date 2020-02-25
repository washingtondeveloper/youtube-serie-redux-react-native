import React from 'react';
import { View, Text } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';

import Add from './Add';
import List from './List';
import Cart from './Cart';
import Login from './Login';

import Bagde from '../components/Badge';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logout } from '../store/ducks/auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabHomeNavigation = () => {
	const { isAuthenticated } = useSelector((state) => state.auth);

	return (
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
			{isAuthenticated && (
				<Tab.Screen
					options={{
						tabBarIcon: ({ color }) => <MaterialIcons name="add" size={24} color={color} />
					}}
					name="Adicionar"
					component={Add}
				/>
			)}
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
};

function App() {
	const { isAuthenticated } = useSelector((state) => state.auth);
	const dispath = useDispatch();

	return (
		<NavigationNativeContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: '#03a9f4'
					},
					headerTitle: <Text style={{ fontSize: 23, color: '#fff', fontWeight: 'bold' }}>Shoppging Car</Text>,
					headerRight: () => (
						<React.Fragment>
							{isAuthenticated && (
								<TouchableOpacity onPress={() => dispath(logout())}>
									<MaterialIcons
										size={25}
										color="#fff"
										name="exit-to-app"
										style={{ marginRight: 10 }}
									/>
								</TouchableOpacity>
							)}
						</React.Fragment>
					)
				}}
			>
				<Stack.Screen name="Home" component={tabHomeNavigation} />
			</Stack.Navigator>
		</NavigationNativeContainer>
	);
}

export default App;
