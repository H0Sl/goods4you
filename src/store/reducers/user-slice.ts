import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartsInfo } from '../../models/user';
import { fetchCartsByUser } from './action-creators';

interface InitialState {
    carts: CartsInfo[];
}

interface CartsInfo {
    totalQuantity: number;
    totalProducts: number;
    discountedTotal: number;
    total: number;
    products: ICartsInfo[];
}

// const cartsInfo: CartsInfo = {
//     totalQuantity: 0,
//     totalProducts: 0,
//     discountedTotal: 0,
//     total: 0,
//     products: [],
// };

const initialState: InitialState = {
    carts: [],
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(
            fetchCartsByUser.fulfilled.type,
            (state, action: PayloadAction<CartsInfo[]>) => {
                state.carts = action.payload;
            },
        );
    },
});

export default userSlice.reducer;
