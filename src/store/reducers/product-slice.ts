import { IProduct } from '../../models/i-product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProduct } from './action-creators';

interface ProductsData {
    products: IProduct[];
}
interface ProductState {
    catalogData: ProductsData;
    isLoading: boolean;
    error: string;
}

const productsData: ProductsData = {
    products: [],
};

const initialState: ProductState = {
    catalogData: productsData,
    isLoading: false,
    error: '',
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(
            fetchProduct.fulfilled.type,
            (state, action: PayloadAction<ProductsData>) => {
                state.isLoading = false;
                state.error = '';
                state.catalogData = action.payload;
            },
        );
        builder.addCase(fetchProduct.pending.type, state => {
            state.isLoading = true;
        });
        builder.addCase(
            fetchProduct.rejected.type,
            (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            },
        );
    },
});

export default productSlice.reducer;
