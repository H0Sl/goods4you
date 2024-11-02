import React, { useState } from 'react';
import { Button } from '../button';
import cl from './Counter.module.css';
import cn from 'classnames';

interface CountProps {
    value?: number;
    size: 'sizeM' | 'sizeL';
}

export const Counter: React.FC<CountProps> = ({
    value = 0,
    size = 'sizeM',
}) => {
    const [count, setCount] = useState(value);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };
    const decrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };
    size = count >= 10 ? 'sizeL' : 'sizeM';
    return (
        <div className={cl.counter}>
            <Button className={cn(cl.viewBtn, cl[size])} onClick={decrement}>
                <div className={cl.minus} />
            </Button>
            <span>{count} items</span>
            <Button className={cn(cl.viewBtn, cl[size])} onClick={increment}>
                <div className={cl.plus} />
            </Button>
        </div>
    );
};
