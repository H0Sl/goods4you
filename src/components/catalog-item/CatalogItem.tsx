import React from 'react';
import cl from './CatalogItem.module.css';
import icon from '../../img/icon-price.svg';
import { Button } from '../UI/button';
import { Title } from '../UI/title';
import { Text } from '../UI/text';
import { IProduct } from '../../models/i-product';
import { useAppSelector } from '../../hooks/redux';
import { Counter } from '../UI/counter';

interface CatalogItemProps {
    product: IProduct;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
    const discount = +(
        (product.price * product.discountPercentage) /
        100
    ).toFixed(1);

    const { user } = useAppSelector(state => state.userSlice);

    const isInCart = user.carts[0].products.find(
        carts => carts.id === product.id,
    );

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
                        <Counter children={isInCart?.quantity} />
                    ) : (
                        <Button className={cl.button} view="icon" size="small">
                            <img src={icon} className={cl.icon} alt="" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};
