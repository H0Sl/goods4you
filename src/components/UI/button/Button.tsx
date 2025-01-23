import React, { MouseEventHandler, ReactNode } from 'react';
import cn from 'classnames';
import cl from './Button.module.css';

interface Button {
    children: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    view?: 'text' | 'icon';
    size?: 'big' | 'small';
    type: 'btnIcon' | 'btnText' | 'btnDisabled';
    loader?: boolean;
}

export const Button: React.FC<Button> = ({
    className,
    children,
    onClick,
    view = 'text',
    size = 'small',
    type = 'btnText',
    loader = false,
}) => {
    return loader === true ? (
        <button
            className={cn(className, cl[view], cl[size], cl[type])}
            onClick={onClick}
        >
            <div className={cl.loader} />
        </button>
    ) : (
        <button
            className={cn(className, cl[view], cl[size], cl[type])}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
