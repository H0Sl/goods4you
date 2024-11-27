import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/product-slice';
import userSlice from './reducers/user-slice';

const rootReducer = combineReducers({
    productSlice,
    userSlice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
