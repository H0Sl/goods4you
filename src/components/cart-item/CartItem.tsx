import React from 'react';
import cl from './CartItem.module.css';
import { Counter } from '../UI/counter';
import { Title } from '../UI/title';
import { Text } from '../UI/text';
import { IProduct } from '../../models/i-product';

interface CartItemProps {
    product: IProduct;
}

export const CartItem: React.FC<CartItemProps> = ({ product }) => {
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
                <Counter size="sizeM" />
                <span className={cl.delete}>Delete</span>
            </div>
        </div>
    );
};
