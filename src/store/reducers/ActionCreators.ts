import axios from 'axios';
import { IProduct } from '../../models/IProduct';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk(
    'catalogData/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IProduct[]>(
                'https://dummyjson.com/products',
            );
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(
                'Не удалось загрузить пользователей',
            );
        }
    },
);
