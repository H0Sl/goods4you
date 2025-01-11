import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, ProductsTypeResponse } from 'api/products-api';
import { CartsByUserTypeResponse, fetchCartsByUsers } from 'api/user-api';

export const fetchProduct = createAsyncThunk<
    ProductsTypeResponse,
    { q: string; skip: number },
    { rejectValue: string }
>('catalogData/fetchProduct', async ({ q, skip }, { rejectWithValue }) => {
    try {
        const data = await fetchProducts(q, skip);
        return data;
    } catch (error) {
        return rejectWithValue(`Server Error ${error}`);
    }
});

export const fetchCartsByUser = createAsyncThunk<
    CartsByUserTypeResponse,
    { id: number },
    { rejectValue: string }
>('carts/fetchCarts', async ({ id }, { rejectWithValue }) => {
    try {
        const data = await fetchCartsByUsers(id);
        return data;
    } catch (e) {
        return rejectWithValue(`Error ${e}`);
    }
});
