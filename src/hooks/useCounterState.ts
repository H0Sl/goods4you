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
<<<<<<< HEAD
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
=======
        if (state > 0) {
<<<<<<< HEAD
            setState(prev => {
                const newQuantity = prev - 1;
                onChange?.(newQuantity);
                return newQuantity;
            });
>>>>>>> 73cf1e5 (Взаимодейстиве с товаром)
=======
            setState(prev => (prev -= 1));
>>>>>>> afe2c8e (Синхронизация изменений в товаре и их добавление)
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
