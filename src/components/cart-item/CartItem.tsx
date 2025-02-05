import React from 'react';
import cl from './CartItem.module.css';
import { IProduct } from 'models/product';
import { useCounterState } from 'hooks/useCounterState';
import { Title } from 'components/UI/title';
import { Text } from 'components/UI/text';
import { Counter } from 'components/UI/counter';
import { useUpdateProduct } from 'hooks/useUpdateProduct';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { fetchUpdateCart } from 'store/reducers/action-creators';

interface CartItemProps {
    product: IProduct;
}

export const CartItem: React.FC<CartItemProps> = ({ product }) => {
    const dispatch = useAppDispatch();
    const { carts } = useAppSelector(state => state.userSlice);

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        dispatch(
            fetchUpdateCart({
                id: carts.id,
                products: carts.products.filter(p => p.id !== product.id),
                merge: false,
            }),
        );
    };

    const { state, onMinusValue, onPlusValue } = useCounterState(
        product.quantity,
        product.id,
    );
    useUpdateProduct(state, product.quantity, product.id);

    return (
        <div className={cl.items}>
            <div className={cl.item}>
                <img src={product.thumbnail} className={cl.mini} alt="" />
                <div className={cl.text}>
                    <Title
                        tag="h2"
                        fontSize="m"
                        fontWeight="semiBold"
                        className={cl.textTitle}
                    >
                        {product.title}
                    </Title>
                    <Text
                        tag="span"
                        fontSize="m"
                        fontWeight="regular"
                        className={cl.textSpan}
                    >
                        ${product.price}
                    </Text>
                </div>
            </div>
            <div className={cl.item}>
                <Counter onMinusClick={onMinusValue} onPlusClick={onPlusValue}>
                    {state}
                </Counter>
                <span className={cl.delete} onClick={handleDelete}>
                    Delete
                </span>
            </div>
        </div>
    );
};
