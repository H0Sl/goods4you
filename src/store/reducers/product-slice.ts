import { IProduct } from 'models/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProduct } from './action-creators';
import { ProductsTypeResponse } from 'api/products-api';
interface ProductsData {
    products: IProduct[];
    skip: number;
    total: number;
}
interface InitialState {
    catalogData: ProductsData;
    isLoading: boolean;
    error: string;
    skip: number;
    total: number;
}

const productsData: ProductsData = {
    products: [],
    skip: 0,
    total: 0,
};

const initialState: InitialState = {
    catalogData: productsData,
    isLoading: false,
    error: '',
    skip: 0,
    total: 0,
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetProducts(state) {
            state.catalogData.products = [];
            state.skip = 0;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProduct.pending.type, state => {
                state.isLoading = true;
            })
            .addCase(
                fetchProduct.fulfilled.type,
                (state, action: PayloadAction<ProductsTypeResponse>) => {
                    state.isLoading = false;
                    state.error = '';
                    state.catalogData.products.push(...action.payload.products);
                    state.skip = action.payload.skip;
                    state.total = action.payload.total;
                },
            )
            .addCase(
                fetchProduct.rejected.type,
                (state, action: PayloadAction<string>) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            );
    },
});

export const { resetProducts } = productSlice.actions;
export default productSlice.reducer;
