import React from 'react';
import cl from './CatalogItem.module.css';
import icon from '../../img/icon-price.svg';
import { Button } from '../UI/button';
import { Title } from '../UI/title';
import { Text } from '../UI/text';
import { IProduct } from '../../models/i-product';

interface CatalogItemProps {
    product: IProduct;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
    return (
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
                        {product.price}$
                    </Text>
                </div>
                <Button className={cl.button} view="icon" size="small">
                    <img src={icon} className={cl.icon} alt="" />
                </Button>
            </div>
        </div>
    );
};
