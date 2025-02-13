import React, { MouseEventHandler } from 'react';
import { Button } from '../button';
import cl from './Counter.module.css';
import cn from 'classnames';

interface CounterProps {
    size?: 'sizeM';
    children: number;
    onMinusClick?: MouseEventHandler<HTMLButtonElement>;
    onPlusClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Counter: React.FC<CounterProps> = ({
    size = 'sizeM',
    children,
    onMinusClick,
    onPlusClick,
}) => {
    const isLoading = false;
    return (
        <div className={cl.counter}>
<<<<<<< Updated upstream
            <Button
                className={cn(cl.btn, cl[size])}
                view="icon"
                onClick={onMinusClick}
                type="btnIcon"
            >
                <div className={cl.minus} />
            </Button>
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
>>>>>>> Stashed changes
        </div>
    );
};
