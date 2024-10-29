import React from 'react';
import cl from './ButtonPrice.module.css';
import icon from '../../../img/icon-price.svg';

const ButtonPrice = () => {
    return (
        <button className={cl.btn}>
            <img src={icon} alt="" />
        </button>
    );
};

export default ButtonPrice;
