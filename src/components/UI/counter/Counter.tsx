import React, { MouseEventHandler, useState } from 'react';
import { Button } from '../button';
import cl from './Counter.module.css';
import cn from 'classnames';

interface CounterProps {
    size?: 'sizeM';
    children: number;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

export const Counter: React.FC<CounterProps> = ({
    size = 'sizeM',
    children,
    onClick,
}) => {
    const [count, setCount] = useState(children);
    return (
        <div className={cl.counter} onClick={onClick}>
            <Button
                className={cn(cl.btn, cl[size])}
                view="icon"
                onClick={() => {
                    setCount(value => value - 1);
                }}
            >
                <div className={cl.minus} />
            </Button>
            <span>{count} items</span>
            <Button
                className={cn(cl.btn, cl[size])}
                view="icon"
                onClick={() => {
                    setCount(value => value + 1);
                }}
            >
                <div className={cl.plus} />
            </Button>
        </div>
    );
};
