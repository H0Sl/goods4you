import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/i-user';
import { fetchUser } from './action-creators';

interface CartsData {
    carts: IUser[];
}
interface InitialState {
    user: CartsData;
}

const cartsData: CartsData = {
    carts: [],
};

const initialState: InitialState = {
    user: cartsData,
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
                state.user = action.payload;
            },
        );
        // builder.addCase(fetchUser.rejected.type, (state, action) => {});
    },
});

export default userSlice.reducer;
