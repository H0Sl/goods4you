import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../api/product-api';
import { fetchUsers } from '../../api/user-api';
import { IProduct } from '../../models/i-product';
import { IUser } from '../../models/i-user';

export const fetchProduct = createAsyncThunk<
    IProduct[],
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

export const fetchUser = createAsyncThunk<
    IUser[],
    { id: number },
    { rejectValue: string }
>('carts/fetchUser', async ({ id }, { rejectWithValue }) => {
    try {
        const data = await fetchUsers(id);
        return data;
    } catch (e) {
        return rejectWithValue(`Error ${e}`);
    }
});
