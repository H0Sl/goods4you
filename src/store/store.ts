import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/product-slice';

const rootReducer = combineReducers({
    productSlice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
