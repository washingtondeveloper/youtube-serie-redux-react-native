import api from '../../services/api.service';
import { showMessage } from 'react-native-flash-message';

import { addCars, addCar } from '../ducks/cars';
import { login } from '../ducks/auth';

export const allCars = () => {
	return (dispatch) => {
		api.get('/cars').then((res) => dispatch(addCars(res.data))).catch(console.log);
	};
};

export const fetchAddCar = (car) => {
	return (dispatch) => {
		api
			.post('/cars', car)
			.then((res) => {
				dispatch(addCar(res.data));
				showMessage({
					message: `${car.name} cadastro com sucesso`,
					type: 'success'
				});
			})
			.catch(console.log);
	};
};

export const authLogin = (user) => {
	return (dispatch) => {
		api
			.post('/login', user)
			.then((res) => {
				if (res.data.token) {
					dispatch(login());
					showMessage({
						message: 'Bem-vindo',
						description: 'Você pode adicionar novos produtos!',
						type: 'success'
					});
				}
			})
			.catch((error) => {
				const { message } = error.response.data;
				showMessage({
					message: 'OPS!',
					description: message,
					type: 'danger'
				});
			});
	};
};
