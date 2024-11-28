import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/i-user';
import { fetchUser } from './action-creators';

interface CartsData {
    carts: IUser[];
    totalQuantity: number;
}
interface InitialState {
    carts: CartsData;
    totalQuantity: number;
}

const cartsData = {
    carts: [],
    totalQuantity: 0,
};
const initialState: InitialState = {
    carts: cartsData,
    totalQuantity: 0,
};

export const userSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // builder.addCase(fetchUser.pending.type, state => {});
        builder.addCase(
            fetchUser.fulfilled.type,
            (state, action: PayloadAction<CartsData>) => {
                state.carts = action.payload;
                state.totalQuantity = action.payload.totalQuantity;
            },
        );
        // builder.addCase(fetchUser.rejected.type, (state, action) => {});
    },
});

export default userSlice.reducer;
