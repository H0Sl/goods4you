import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../models/IProduct';

interface ProductState {
    product: IProduct[];
    isLoading: boolean;
    error: string;
}

const initialState: ProductState = {
    product: [],
    isLoading: false,
    error: '',
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
});
