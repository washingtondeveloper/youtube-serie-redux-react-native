import { configureStore } from '@reduxjs/toolkit';

import rootCars from './ducks/cars';
import rootCart from './ducks/cart';
import rootAuth from './ducks/auth';

export default configureStore({
	reducer: {
		cars: rootCars,
		cart: rootCart,
		auth: rootAuth
	}
});
