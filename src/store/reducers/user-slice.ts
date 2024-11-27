import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/i-user';
import { fetchUser } from './action-creators';

interface CartsData {
    carts: IUser[];
}
interface InitialState {
    carts: CartsData;
}

const cartsData = {
    carts: [],
};
const initialState: InitialState = {
    carts: cartsData,
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
            },
        );
        // builder.addCase(fetchUser.rejected.type, (state, action) => {});
    },
});

export default userSlice.reducer;
