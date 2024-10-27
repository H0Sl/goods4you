import React from 'react';
import cl from './Input.module.css';

const Input = () => {
    return (
        <>
            <input
                type="text"
                className={cl.input}
                placeholder="Search by title"
            />
        </>
    );
};

export default Input;
