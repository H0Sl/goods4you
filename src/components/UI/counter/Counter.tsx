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
    const isLoading = false;
    return (
        <div className={cl.counter}>
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
            <Button
                className={cn(cl.btn, cl[size])}
                view="icon"
                onClick={onMinusClick}
                variant="btnIcon"
            >
                <div className={cl.minus} />
            </Button>
<<<<<<< HEAD
=======
            <span>{children} items</span>
            <Button
                className={cn(cl.btn, cl[size])}
                view="icon"
                onClick={onPlusClick}
                type="btnIcon"
            >
                <div className={cl.plus} />
            </Button>
=======
>>>>>>> ed661aaba8b35ed85660013dfe9bc4a378781cf1
            {isLoading ? (
                <Button
                    className={cn(cl.btn, cl[size])}
                    view="icon"
                    onClick={onMinusClick}
                    variant="btnIconDisabled"
                    loader={true}
                    disabled={true}
                />
            ) : (
                <Button
                    className={cn(cl.btn, cl[size])}
                    view="icon"
                    onClick={onMinusClick}
                    variant="btnIcon"
                >
                    <div className={cl.minus} />
                </Button>
            )}
<<<<<<< HEAD
=======
>>>>>>> 70ee1dc (Fix component)
>>>>>>> ed661aaba8b35ed85660013dfe9bc4a378781cf1
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
                >
                    <div className={cl.plus} />
                </Button>
=======
>>>>>>> ed661aaba8b35ed85660013dfe9bc4a378781cf1
                    disabled={true}
                >
                    <div className={cl.plus} />
                </Button>
            ) : isLoading ? (
                <Button
                    className={cn(cl.btn, cl[size])}
                    view="icon"
                    onClick={onPlusClick}
                    variant="btnIconDisabled"
                    loader={true}
                    disabled={true}
                />
<<<<<<< HEAD
=======
>>>>>>> 70ee1dc (Fix component)
>>>>>>> ed661aaba8b35ed85660013dfe9bc4a378781cf1
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 70ee1dc (Fix component)
>>>>>>> ed661aaba8b35ed85660013dfe9bc4a378781cf1
        </div>
    );
};
