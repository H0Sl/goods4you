import { IProduct } from 'models/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUpdateCart } from './action-creators';
import { UpdateCart } from 'api/update-api';

interface InitialState {
    id: number;
    products: IProduct[];
    isLoading: boolean;
    error: string;
}

const initialState: InitialState = {
    id: 0,
    products: [],
    isLoading: false,
    error: '',
};

export const updateSlice = createSlice({
    name: 'update',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUpdateCart.pending.type, state => {
                state.isLoading = true;
            })
            .addCase(
                fetchUpdateCart.fulfilled.type,
                (state, action: PayloadAction<UpdateCart>) => {
                    state.id = action.payload.id;
                    state.products = action.payload.products;
                    state.isLoading = false;
                },
            )
            .addCase(
                fetchUpdateCart.rejected.type,
                (state, action: PayloadAction<string>) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            );
    },
});

export default updateSlice.reducer;
