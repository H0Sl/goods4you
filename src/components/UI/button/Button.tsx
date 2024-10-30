import React, { ReactNode } from 'react';
import cl from './Button.module.css';

interface Button {
    children: ReactNode;
}

const Button: React.FC<Button> = ({ children }) => {
    return <button className={cl.button}>{children}</button>;
};

export default Button;
