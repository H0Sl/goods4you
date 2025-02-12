import { Button } from 'components/UI/button';
import { Counter } from 'components/UI/counter';
import { useCounterState } from 'hooks/useCounterState';
import { useGetCart } from 'hooks/useGetCart';
import { IProduct } from 'models/product';
import React from 'react';
import cl from './BtnOrCounter.module.css';
import icon from 'img/icon-price.svg';

interface BtnOrCounterProps {
    product: IProduct;
    toggle?: boolean;
}

export const BtnOrCounter: React.FC<BtnOrCounterProps> = ({
    product,
    toggle,
}) => {
    const { initialQuantity, isInCart } = useGetCart(product.id);
    const { state, onMinusValue, onPlusValue, addProduct } = useCounterState(
        initialQuantity,
        product.id,
        product.stock,
    );

    return (
        <div>
            {isInCart ? (
                <Counter
                    onMinusClick={onMinusValue}
                    onPlusClick={onPlusValue}
                    stock={product.stock}
                >
                    {state}
                </Counter>
            ) : (
                <div>
                    {toggle ? (
                        <Button
                            className={cl.buttonIcon}
                            view="icon"
                            size="small"
                            variant="btnIcon"
                            onClick={addProduct}
                        >
                            <img src={icon} className={cl.icon} alt="" />
                        </Button>
                    ) : (
                        <Button
                            className={cl.button}
                            view="text"
                            size="small"
                            variant="btnText"
                            onClick={addProduct}
                        >
                            <span className={cl.btnSpan}>Add to cart</span>
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};
