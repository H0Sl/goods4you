import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { fetchUpdateCart } from 'store/reducers/action-creators';

export const useCounterState = (initialState: number, productId: number) => {
    const [state, setState] = useState(initialState);
    const dispatch = useAppDispatch();
    const { carts } = useAppSelector(state => state.userSlice);

    const onMinusValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        if (state > 1) {
            setState(prev => (prev -= 1));
        } else if (state === 1) {
            setState(0);
            dispatch(
                fetchUpdateCart({
                    id: carts.id,
                    products: carts.products.filter(p => p.id !== productId),
                    merge: false,
                }),
            );
        }
    };

    const onPlusValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setState(prev => (prev += 1));
    };

    return {
        state,
        onMinusValue,
        onPlusValue,
    };
};
