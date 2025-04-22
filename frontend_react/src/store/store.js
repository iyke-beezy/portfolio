import { configureStore } from '@reduxjs/toolkit';
import sanityReducer from './reducer'

export const store = configureStore({
    reducer: {
        sanity: sanityReducer
    }
})