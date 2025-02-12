import React from 'react';
import cl from './CartItem.module.css';
import { IProduct } from 'models/product';
import { useCounterState } from 'hooks/useCounterState';
import { Title } from 'components/UI/title';
import { Text } from 'components/UI/text';
import { BtnOrCounter } from 'components/btn-or-counter/BtnOrCounter';

interface CartItemProps {
    product: IProduct;
}

export const CartItem: React.FC<CartItemProps> = ({ product }) => {
    const { handleDelete } = useCounterState(
        product.quantity,
        product.id,
        product.stock,
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
                <BtnOrCounter product={product} />
                <span className={cl.delete} onClick={handleDelete}>
                    Delete
                </span>
            </div>
        </div>
    );
};
