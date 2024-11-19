import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../api/ProductApi';

export const fetchProduct = createAsyncThunk(
    'catalogData/fetchAll',
    async (q: string, thunkAPI) => {
        try {
            const data = await fetchProducts(q); // Используйте функцию для получения данных
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(
                `${e}Не удалось загрузить пользователей`,
            );
        }
    },
);
