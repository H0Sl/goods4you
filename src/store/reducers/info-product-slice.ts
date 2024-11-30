import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProductsInfo } from './action-creators';
import { IProduct } from '../../models/i-product';

interface InitialState {
    products: IProduct[];
}

const initialState: InitialState = {
    products: [],
};

export const infoProductSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // builder.addCase(fetchProductsInfo.pending.type, state => {});
        builder.addCase(
            fetchProductsInfo.fulfilled.type,
            (state, action: PayloadAction<IProduct[]>) => {
                state.products = action.payload;
            },
        );
        // builder.addCase(fetchProductsInfo.rejected.type, (state, action) => {});
    },
});

export default infoProductSlice.reducer;
