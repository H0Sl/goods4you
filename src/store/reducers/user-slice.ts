import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartsInfo } from '../../models/user';
import { fetchCartsByUser } from './action-creators';
import { CartsByUserTypeResponse } from '../../api/user-api';

interface InitialState {
    carts: ICartsInfo;
}

const initialState: InitialState = {
    carts: {
        products: [],
        total: 0,
        discountedTotal: 0,
        totalProducts: 0,
        totalQuantity: 0,
    },
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(
            fetchCartsByUser.fulfilled.type,
            (state, action: PayloadAction<CartsByUserTypeResponse>) => {
                state.carts = action.payload.carts[0];
            },
        );
    },
});

export default userSlice.reducer;
