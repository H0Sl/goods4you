import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../api/product-api';
import { fetchUsers } from '../../api/user-api';

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

export const fetchUser = createAsyncThunk(
    'carts/fetchUser',
    async (_, { rejectWithValue }) => {
        try {
            const data = await fetchUsers();
            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);
