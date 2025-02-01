import { IProduct } from 'models/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUpdateCart } from './action-creators';
import { UpdateCart } from 'api/update-api';

interface InitialState {
    id: number;
    products: IProduct[];
    totalQuantity: number;
}

const initialState: InitialState = {
    id: 0,
    products: [],
    totalQuantity: 0,
};

export const updateSlice = createSlice({
    name: 'update',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(
            fetchUpdateCart.fulfilled.type,
            (state, action: PayloadAction<UpdateCart>) => {
                state.id = action.payload.id;
                state.totalQuantity = action.payload.totalQuantity;
                state.products = action.payload.products;
            },
        );
    },
});

export default updateSlice.reducer;
