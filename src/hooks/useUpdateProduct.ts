import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { fetchUpdateCart } from 'store/reducers/action-creators';

export const useUpdateProduct = (
    state: number,
    productQuantity: number,
    productId: number,
) => {
    const dispatch = useAppDispatch();
    const { carts } = useAppSelector(state => state.userSlice);

    useEffect(() => {
        if (state !== productQuantity) {
            const updatedProducts = carts.products.map(p =>
                p.id === productId ? { ...p, quantity: state } : p,
            );
            dispatch(
                fetchUpdateCart({
                    id: carts.id,
                    products: updatedProducts,
                    merge: false,
                }),
            );
        }
<<<<<<< HEAD
    }, [state, carts]);
=======
    }, [state, productQuantity, carts]);
>>>>>>> 70ee1dc (Fix component)
};
