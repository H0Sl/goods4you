import React, { useState } from 'react';
import { Button } from '../button';
import cl from './Counter.module.css';
import cn from 'classnames';

interface CounterProps {
    size: 'sizeM' | 'sizeL';
}

export const Counter: React.FC<CounterProps> = ({ size = 'sizeM' }) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(value => value + 1);
    };
    const decrement = () => {
        if (count > 0) {
            setCount(value => value - 1);
        }
    };

    return (
        <div className={cl.counter}>
            <Button className={cn(cl.btn, cl[size])} onClick={decrement}>
                <div className={cl.minus} />
            </Button>
            <span>{count} items</span>
            <Button className={cn(cl.btn, cl[size])} onClick={increment}>
                <div className={cl.plus} />
            </Button>
        </div>
    );
};
