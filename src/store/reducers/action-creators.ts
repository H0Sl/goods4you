import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../api/product-api';

interface FetchProduct {
    q: string;
    skip: number;
}

export const fetchProduct = createAsyncThunk(
    'catalogData/fetchProduct',
    async ({ q, skip }: FetchProduct, thunkAPI) => {
        try {
            const data = await fetchProducts(q, skip);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);
