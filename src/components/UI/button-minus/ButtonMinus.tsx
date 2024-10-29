import React from 'react';
import cl from './ButtonMinus.module.css';

const ButtonMinus = () => {
    return (
        <button className={cl.btn}>
            <div className={cl.minus} />
        </button>
    );
};

export default ButtonMinus;
