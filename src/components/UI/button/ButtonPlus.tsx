import React from 'react';
import cl from './Button.module.css';
import { Button } from './index';

export const ButtonPlus = () => {
    return (
        <Button>
            <div className={cl.plus} />
        </Button>
    );
};
