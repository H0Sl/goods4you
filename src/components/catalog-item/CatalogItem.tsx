import React from 'react';
import cl from './CatalogItem.module.css';
import { IProduct } from 'models/product';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useCounterState } from 'hooks/useCounterState';
import { Title } from 'components/UI/title';
import { Text } from 'components/UI/text';
import { Counter } from 'components/UI/counter';
import { Button } from 'components/UI/button';
import icon from 'img/icon-price.svg';
import { fetchUpdateCart } from 'store/reducers/action-creators';

interface CatalogItemProps {
    product: IProduct;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
    const discount = +(
        (product.price * product.discountPercentage) /
        100
    ).toFixed(1);
    const dispatch = useAppDispatch();

    const { carts } = useAppSelector(state => state.userSlice);

    const isInCart = carts?.products?.find(
        products => products.id === product.id,
    );

    const initialQuantity = isInCart?.quantity || 0;

    const { state, onMinusValue, onPlusValue } = useCounterState(
        initialQuantity,
        newQuantity => {
            const updatedProducts = carts.products.map(p =>
                p.id === product.id ? { ...p, quantity: newQuantity } : p,
            );
            dispatch(
                fetchUpdateCart({
                    id: carts.id,
                    products: updatedProducts,
                    merge: false,
                }),
            );
        },
    );

    const addProductInCarts = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        dispatch(
            fetchUpdateCart({
                id: carts.id,
                products: [...carts.products, { id: product.id, quantity: 1 }],
                merge: false,
            }),
        );
    };

    return (
        <div className="container">
            <div className={cl.item}>
                <div className={cl.img}>
                    <img src={product.thumbnail} alt="" />
                    <div className={cl.mask}>
                        <span>Show details</span>
                    </div>
                </div>
                <div className={cl.content}>
                    <div className={cl.text}>
                        <Title
                            tag="h2"
                            fontSize="m"
                            fontWeight="semiBold"
                            className={cl.title}
                        >
                            {product.title}
                        </Title>
                        <Text
                            tag="span"
                            fontWeight="regular"
                            fontSize="m"
                            className={cl.price}
                        >
                            ${(product.price - discount).toFixed(1)}
                        </Text>
                    </div>
                    {isInCart ? (
                        <Counter
                            onMinusClick={onMinusValue}
                            onPlusClick={onPlusValue}
                        >
                            {state}
                        </Counter>
                    ) : (
                        <Button
                            className={cl.button}
                            view="icon"
                            size="small"
                            onClick={addProductInCarts}
                            variant="btnIcon"
                        >
                            <img src={icon} className={cl.icon} alt="" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};
