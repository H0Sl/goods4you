import React from 'react';
import cl from './CartItem.module.css';
import mini from '../../img/cart/photo.png';
import { Counter } from '../UI/counter';

export const CartItem = () => {
    return (
        <div className={cl.item}>
            <img src={mini} alt="" />
            <div className={cl.text}>
                <h4 className={cl.textTitle}>Essence Mascara Lash Princess</h4>
                <span className={cl.textSpan}>$110</span>
            </div>
            <Counter />
            <span className={cl.delete}>Delete</span>
        </div>
    );
};
