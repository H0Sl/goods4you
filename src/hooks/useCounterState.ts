import { useState } from 'react';
<<<<<<< Updated upstream
=======
import { useAppDispatch, useAppSelector } from './redux';
import { fetchUpdateCart } from 'store/reducers/action-creators';
import { useUpdateProduct } from './useUpdateProduct';
>>>>>>> Stashed changes

export const useCounterState = (initialState: number) => {
    const [state, setState] = useState(initialState);
<<<<<<< Updated upstream
=======
    const dispatch = useAppDispatch();
    const { carts } = useAppSelector(state => state.userSlice);
    useUpdateProduct(state, initialState, productId);
>>>>>>> Stashed changes

    const onMinusValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        if (state > 1) {
            setState(prev => prev - 1);
<<<<<<< Updated upstream
=======
        } else if (state === 1) {
            dispatch(
                fetchUpdateCart({
                    id: carts.id,
                    products: carts.products.filter(p => p.id !== productId),
                    merge: false,
                }),
            );
>>>>>>> Stashed changes
        }
    };

    const onPlusValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setState(prev => prev + 1);
    };

    return {
        state,
        onMinusValue,
        onPlusValue,
    };
};
