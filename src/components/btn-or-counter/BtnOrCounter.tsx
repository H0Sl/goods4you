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
    isCart?: boolean;
}

export const BtnOrCounter: React.FC<BtnOrCounterProps> = ({
    product,
    toggle,
    isCart = false,
}) => {
    const { initialQuantity, isInCart } = useGetCart(product.id);
    const {
        state,
        onMinusValue,
        onPlusValue,
        addProduct,
        isLoading,
        onPlusClickInCart,
    } = useCounterState(initialQuantity, product.id, product.stock);

    return (
        <div>
            {state !== 0 && isInCart ? (
                <div>
                    {isCart === false ? (
                        <Counter
                            onMinusClick={onMinusValue}
                            onPlusClick={onPlusValue}
                            stock={product.stock}
                            loading={isLoading}
                        >
                            {state}
                        </Counter>
                    ) : (
                        <Counter
                            onMinusClick={onMinusValue}
                            onPlusClick={onPlusClickInCart}
                            stock={product.stock}
                            loading={isLoading}
                        >
                            {state}
                        </Counter>
                    )}
                </div>
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
