import { configureStore } from '@reduxjs/toolkit';

import rootCars from './ducks/cars';
import rootCart from './ducks/cart';

export default configureStore({
	reducer: {
		cars: rootCars,
		cart: rootCart
	}
});
