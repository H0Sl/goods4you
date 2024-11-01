import React from 'react';
import cl from './CartItem.module.css';
import mini from '../../img/cart/photo.png';
import { ButtonPlus } from '../UI/button';
import { ButtonMinus } from '../UI/button';

export const CartItem = () => {
    return (
        <div className={cl.item}>
            <img src={mini} alt="" />
            <div className={cl.text}>
                <h4 className={cl.textTitle}>Essence Mascara Lash Princess</h4>
                <span className={cl.textSpan}>$110</span>
            </div>
            <div className={cl.counter}>
                <ButtonMinus />
                <span>1 items</span>
                <ButtonPlus />
            </div>
            <span className={cl.delete}>Delete</span>
        </div>
    );
};
