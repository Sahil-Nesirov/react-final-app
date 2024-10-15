import { configureStore } from '@reduxjs/toolkit';
import logoReducer from '../features/logoSlice';
import arxafonReducer from '../features/arxafonSlice';
import browseTheRangeReducer from '../features/browsetherangeSlice'; 

export const store = configureStore({
  reducer: {
    logos: logoReducer,
    arxafons: arxafonReducer,
    browseTheRange: browseTheRangeReducer,
  },
});
