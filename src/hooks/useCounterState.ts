import { useState } from 'react';
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import { useAppDispatch, useAppSelector } from './redux';
import { fetchUpdateCart } from 'store/reducers/action-creators';
import { useUpdateProduct } from './useUpdateProduct';
>>>>>>> Stashed changes
=======
import { useAppDispatch, useAppSelector } from './redux';
import { fetchUpdateCart } from 'store/reducers/action-creators';
>>>>>>> bacfcf8 (Удаление товара)

export const useCounterState = (initialState: number, productId: number) => {
    const [state, setState] = useState(initialState);
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
    const dispatch = useAppDispatch();
    const { carts } = useAppSelector(state => state.userSlice);
    useUpdateProduct(state, initialState, productId);
>>>>>>> Stashed changes
=======
    const dispatch = useAppDispatch();
    const { carts } = useAppSelector(state => state.userSlice);
>>>>>>> bacfcf8 (Удаление товара)

    const onMinusValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
<<<<<<< HEAD
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
=======
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
>>>>>>> bacfcf8 (Удаление товара)
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
