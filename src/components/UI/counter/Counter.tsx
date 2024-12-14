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
    const increment = () => {
        setCount(value => value + 1);
    };
    const decrement = () => {
        if (count > 0) {
            setCount(value => value - 1);
        }
    };
    return (
        <div className={cl.counter} onClick={onClick}>
            <Button
                className={cn(cl.btn, cl[size])}
                view="icon"
                onClick={decrement}
            >
                <div className={cl.minus} />
            </Button>
            <span>{count} items</span>
            <Button
                className={cn(cl.btn, cl[size])}
                view="icon"
                onClick={increment}
            >
                <div className={cl.plus} />
            </Button>
        </div>
    );
};
