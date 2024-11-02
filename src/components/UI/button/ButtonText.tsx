import React from 'react';
import cl from './Button.module.css';
import { Button } from './index';

interface Button {
    children: string;
}

export const ButtonText: React.FC<Button> = ({ children }) => {
    return (
        <Button className={cl.button}>
            <span className={cl.span}>{children}</span>
        </Button>
    );
};
