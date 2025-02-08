import { useAppSelector } from './redux';

export const useGetCart = (productId: number) => {
    const { carts } = useAppSelector(state => state.userSlice);

    const isInCart = carts?.products?.find(
        cartProducts => cartProducts.id === productId,
    );

    const initialQuantity = isInCart?.quantity || 1;

    return {
        isInCart,
        initialQuantity,
    };
};
