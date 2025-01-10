import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/product-slice';
import userSlice from './reducers/user-slice';
import infoProductSlice from './reducers/info-product-slice';
import { fetchProductInf } from '../api/info-product-api';

const rootReducer = combineReducers({
    productSlice,
    userSlice,
    infoProductSlice,
    [fetchProductInf.reducerPath]: fetchProductInf.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(fetchProductInf.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
