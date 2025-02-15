import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartsInfo } from 'models/user';
import { fetchCartsByUser, fetchUpdateCart } from './action-creators';
import { CartsByUserTypeResponse } from 'api/user-api';

interface InitialState {
    carts: ICartsInfo;
    isLoading: boolean;
}

const initialState: InitialState = {
    carts: {
        id: 0,
        products: [],
        total: 0,
        discountedTotal: 0,
        totalProducts: 0,
        totalQuantity: 0,
    },
    isLoading: false,
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUpdateCart.pending.type, state => {
                state.isLoading = true;
            })
            .addCase(
                fetchCartsByUser.fulfilled.type,
                (state, action: PayloadAction<CartsByUserTypeResponse>) => {
                    state.carts = action.payload.carts[0];
                },
            )
            .addCase(
                fetchUpdateCart.fulfilled.type,
                (state, action: PayloadAction<ICartsInfo>) => {
                    state.carts.products = action.payload.products;
                    state.carts.totalQuantity = action.payload.totalQuantity;
                    state.carts.totalProducts = action.payload.totalProducts;
                    state.carts.total = action.payload.total;
                    state.carts.discountedTotal =
                        action.payload.discountedTotal;
                    state.isLoading = false;
                },
            );
    },
});

export default userSlice.reducer;
