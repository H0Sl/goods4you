import React from 'react';
import cl from './CartItem.module.css';
import mini from '../../img/cart/photo.png';
import { Counter } from '../UI/counter';
import { Title } from '../UI/title';
import { Text } from '../UI/text';

export const CartItem = () => {
    return (
        <div className={cl.item}>
            <img src={mini} alt="" />
            <div className={cl.text}>
                <Title
                    tag="h2"
                    fontSize="m"
                    fontWeight="semiBold"
                    className={cl.textTitle}
                >
                    Essence Mascara Lash Princess
                </Title>
                <Text
                    tag="span"
                    fontSize="m"
                    fontWeight="regular"
                    className={cl.textSpan}
                >
                    $110
                </Text>
            </div>
            <Counter size="sizeM" />
            <span className={cl.delete}>Delete</span>
        </div>
    );
};
