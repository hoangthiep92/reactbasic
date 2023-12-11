import { configureStore } from "@reduxjs/toolkit";
import countReducer from './Features/Count';

export const Store = configureStore({
    reducer: {
        count: countReducer
    }
})