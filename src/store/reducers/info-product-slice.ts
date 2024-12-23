import { IProduct } from '../../models/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProductsInfo } from './action-creators';

interface InitialState {
    products: IProduct;
    isLoading: boolean;
    error: string;
}

const initialState: InitialState = {
    products: {
        id: 0,
        title: '',
        price: 0,
        thumbnail: '',
        quantity: 0,
        warrantyInformation: '',
        stock: 0,
        shippingInformation: '',
        description: '',
        discountPercentage: 0,
    },
    isLoading: false,
    error: '',
};

export const infoProductSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProductsInfo.pending.type, state => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(
                fetchProductsInfo.fulfilled.type,
                (state, action: PayloadAction<IProduct>) => {
                    state.isLoading = false;
                    state.products = action.payload;
                },
            )
            .addCase(
                fetchProductsInfo.rejected.type,
                (state, action: PayloadAction<string>) => {
                    state.error = action.payload;
                    state.isLoading = false;
                },
            );
    },
});

export default infoProductSlice.reducer;
