import { useState } from 'react';
<<<<<<< HEAD
import { useUpdateProduct } from './useUpdateProduct';
import { useAppDispatch, useAppSelector } from './redux';
import { fetchUpdateCart } from 'store/reducers/action-creators';
=======
<<<<<<< HEAD
import { useAppDispatch, useAppSelector } from './redux';
import { fetchUpdateCart } from 'store/reducers/action-creators';
=======
<<<<<<< Updated upstream
=======
import { useAppDispatch, useAppSelector } from './redux';
import { fetchUpdateCart } from 'store/reducers/action-creators';
import { useUpdateProduct } from './useUpdateProduct';
>>>>>>> Stashed changes
>>>>>>> 70ee1dc (Fix component)
>>>>>>> ed661aaba8b35ed85660013dfe9bc4a378781cf1

export const useCounterState = (
    initialState: number,
    productId: number,
    stock: number,
) => {
    const [state, setState] = useState(initialState);
<<<<<<< HEAD
    const dispatch = useAppDispatch();
    const { carts } = useAppSelector(state => state.userSlice);
    useUpdateProduct(state, initialState, productId);
=======
<<<<<<< HEAD
    const dispatch = useAppDispatch();
    const { carts } = useAppSelector(state => state.userSlice);
=======
<<<<<<< Updated upstream
=======
    const dispatch = useAppDispatch();
    const { carts } = useAppSelector(state => state.userSlice);
    useUpdateProduct(state, initialState, productId);
>>>>>>> Stashed changes
>>>>>>> 70ee1dc (Fix component)
>>>>>>> ed661aaba8b35ed85660013dfe9bc4a378781cf1

    const onMinusValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        if (state > 1) {
            setState(prev => prev - 1);
<<<<<<< HEAD
        } else if (state === 1) {
=======
<<<<<<< HEAD
        } else if (state === 0) {
            setState(0);
=======
<<<<<<< Updated upstream
=======
        } else if (state === 1) {
>>>>>>> 70ee1dc (Fix component)
>>>>>>> ed661aaba8b35ed85660013dfe9bc4a378781cf1
            dispatch(
                fetchUpdateCart({
                    id: carts.id,
                    products: carts.products.filter(p => p.id !== productId),
                    merge: false,
                }),
            );
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 70ee1dc (Fix component)
>>>>>>> ed661aaba8b35ed85660013dfe9bc4a378781cf1
        }
    };

    const onPlusValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        if (state < stock) {
            setState(prev => prev + 1);
        }
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
    };
};
