import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/user';
import { fetchCartsByUser } from './action-creators';

interface CartsData {
    carts: IUser[];
}
interface InitialState {
    user: CartsData;
    isLoading: boolean;
    error: string;
}

const cartsData: CartsData = {
    carts: [],
};

const initialState: InitialState = {
    user: cartsData,
    isLoading: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCartsByUser.pending.type, state => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(
            fetchCartsByUser.fulfilled.type,
            (state, action: PayloadAction<CartsData>) => {
                state.isLoading = false;
                state.user = action.payload;
            },
        );
        builder.addCase(
            fetchCartsByUser.rejected.type,
            (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            },
        );
    },
});

export default userSlice.reducer;
