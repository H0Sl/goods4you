import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { fetchUpdateCart } from 'store/reducers/action-creators';
import { useUpdateProduct } from './useUpdateProduct';

export const useCounterState = (
    initialState: number,
    productId: number,
    stock: number,
) => {
    const [state, setState] = useState(initialState);
    const dispatch = useAppDispatch();
    const { carts, isLoading } = useAppSelector(state => state.userSlice);
    useUpdateProduct(state, initialState, productId);

    const onMinusValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        if (state >= 1) {
            setState(prev => prev - 1);
        } else if (state === 1) {
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
        if (state < stock) {
            setState(prev => prev + 1);
        }
    };

    const onPlusClickInCart = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setState(prev => prev + 1);
    };

    const addProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setState(1);
        dispatch(
            fetchUpdateCart({
                id: carts.id,
                products: [...carts.products, { id: productId, quantity: 1 }],
                merge: false,
            }),
        );
    };

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setState(0);
        dispatch(
            fetchUpdateCart({
                id: carts.id,
                products: carts.products.filter(p => p.id !== productId),
                merge: false,
            }),
        );
    };

    return {
        state,
        onMinusValue,
        onPlusValue,
        addProduct,
        handleDelete,
        onPlusClickInCart,
        isLoading,
    };
};
