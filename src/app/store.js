import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice';  // Make sure you have carSlice in this path

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

export default store;