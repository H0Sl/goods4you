import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartsInfo } from '../../models/user';
import { fetchCartsByUser } from './action-creators';

// interface CartsByUser {
//     carts: ICartsInfo[];
// }

// const cartsByUser: CartsByUser = {
//     carts: [],
// };

interface InitialState {
    carts: ICartsInfo[];
}

const initialState: InitialState = {
    carts: [],
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(
            fetchCartsByUser.fulfilled.type,
            (state, action: PayloadAction<InitialState>) => {
                state.carts = [action.payload.carts[0]];
            },
        );
    },
});

export default userSlice.reducer;
