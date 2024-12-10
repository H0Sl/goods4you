import { IProduct } from './../../models/i-product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProductsInfo } from './action-creators';

interface InitialState {
    products: IProduct;
    isLoading: boolean;
    error: string;
}

const product: IProduct = {
    id: 0,
    title: '',
    price: 0,
    thumbnail: '',
    quantity: 0,
    warrantyInformation: '',
    description: '',
    stock: 0,
    shippingInformation: '',
    discountPercentage: 0,
};

const initialState: InitialState = {
    products: product,
    isLoading: false,
    error: '',
};

export const infoProductSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProductsInfo.pending.type, state => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(
            fetchProductsInfo.fulfilled.type,
            (state, action: PayloadAction<IProduct>) => {
                state.isLoading = false;
                state.products = action.payload;
            },
        );
        builder.addCase(
            fetchProductsInfo.rejected.type,
            (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.isLoading = false;
            },
        );
    },
});

export default infoProductSlice.reducer;
