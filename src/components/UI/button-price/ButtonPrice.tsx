import React from 'react';
import cl from './ButtonPrice.module.css';
import icon from '../../../img/icon-price.svg';

const ButtonPrice = () => {
    return (
        <button className={cl.btn}>
            <img src={icon} alt="" className={cl.icon} />
        </button>
    );
};

export default ButtonPrice;
