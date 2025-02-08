import React, { MouseEventHandler } from 'react';
import { Button } from '../button';
import cl from './Counter.module.css';
import cn from 'classnames';

interface CounterProps {
    size?: 'sizeM';
    children: number;
    onMinusClick?: MouseEventHandler<HTMLButtonElement>;
    onPlusClick?: MouseEventHandler<HTMLButtonElement>;
    stock: number;
}

export const Counter: React.FC<CounterProps> = ({
    size = 'sizeM',
    children,
    onMinusClick,
    onPlusClick,
    stock,
}) => {
    return (
        <div className={cl.counter}>
            <Button
                className={cn(cl.btn, cl[size])}
                view="icon"
                onClick={onMinusClick}
                variant="btnIcon"
            >
                <div className={cl.minus} />
            </Button>
            {children < 2 ? (
                <span>{children} item</span>
            ) : (
                <span>{children} items</span>
            )}
            {children === stock ? (
                <Button
                    className={cn(cl[size])}
                    view="icon"
                    onClick={onPlusClick}
                    variant="btnIconDisabled"
                >
                    <div className={cl.plus} />
                </Button>
            ) : (
                <Button
                    className={cn(cl.btn, cl[size])}
                    view="icon"
                    onClick={onPlusClick}
                    variant="btnIcon"
                >
                    <div className={cl.plus} />
                </Button>
            )}
        </div>
    );
};
