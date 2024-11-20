import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../api/product-api';

interface FetchParams {
    q?: string;
    limit?: number;
}

export const fetchProduct = createAsyncThunk(
    'catalogData/fetchAll',
    async ({ q, limit }: FetchParams, thunkAPI) => {
        try {
            const data = await fetchProducts(q, limit);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    },
);
