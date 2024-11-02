import React, { useState } from 'react';
import { Button } from '../button';
import cl from './Counter.module.css';

interface CountProps {
    value?: number;
}

export const Counter: React.FC<CountProps> = ({ value = 0 }) => {
    const [count, setCount] = useState(value);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };
    const decrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };
    return (
        <div className={cl.counter}>
            <Button className={cl.viewBtn} onClick={decrement}>
                <div className={cl.minus} />
            </Button>
            <span>{count} items</span>
            <Button className={cl.viewBtn} onClick={increment}>
                <div className={cl.plus} />
            </Button>
        </div>
    );
};
