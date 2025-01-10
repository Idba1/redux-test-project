import { configureStore } from '@reduxjs/toolkit'
import reducer from './features/counter/counterSlice';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        counter: reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
})

export default store;