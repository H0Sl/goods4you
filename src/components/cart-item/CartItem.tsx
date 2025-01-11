import React from 'react';
import cl from './CartItem.module.css';
import { useCounterState } from '../../hooks/useCounterState';
import { Counter } from '../UI/counter';

import { Title } from '../UI/title';
import { Text } from '../UI/text';
import { IProduct } from 'models/product';

interface CartItemProps {
    product: IProduct;
}

export const CartItem: React.FC<CartItemProps> = ({ product }) => {
    const { state, onMinusValue, onPlusValue } = useCounterState(
        product.quantity,
    );
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
                <span className={cl.delete}>Delete</span>
            </div>
        </div>
    );
};
