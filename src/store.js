import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './redux/reducers/contactReducer';
//created store file for contact reducer
export const store = configureStore({
  reducer: {
    contactReducer 
  },
});
