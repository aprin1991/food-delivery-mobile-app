import { configureStore } from '@reduxjs/toolkit';
import RestaurantReducer from './features/restaurantSlice';
import basketReducer from './features/basketSlice';
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: RestaurantReducer,
  },
});
