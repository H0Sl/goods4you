import React from 'react';
import cl from './Button.module.css';
import { Button } from './index';

export const ButtonMinus = () => {
    return (
        <Button>
            <div className={cl.minus} />
        </Button>
    );
};
