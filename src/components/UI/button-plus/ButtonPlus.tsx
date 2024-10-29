import React from 'react';
import cl from './ButtonPlus.module.css';

const ButtonPlus = () => {
    return (
        <button className={cl.btn}>
            <div className={cl.plus} />
        </button>
    );
};

export default ButtonPlus;
