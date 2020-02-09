import api from '../../services/api.service';

import { addCars } from '../ducks/cars';

export const allCars = () => {
	return (dispatch) => {
		api.get('/cars').then((res) => dispatch(addCars(res.data))).catch(console.log);
	};
};
