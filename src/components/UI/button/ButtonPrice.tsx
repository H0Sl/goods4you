import React from 'react';
import cl from './Button.module.css';
import icon from '../../../img/icon-price.svg';
import { Button } from './index';

export const ButtonPrice = () => {
    return (
        <Button>
            <img src={icon} alt="" className={cl.icon} />
        </Button>
    );
};
