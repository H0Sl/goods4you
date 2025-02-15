import React from 'react';
import cl from './CatalogItem.module.css';
import { IProduct } from 'models/product';
import { Title } from 'components/UI/title';
import { Text } from 'components/UI/text';
import { BtnOrCounter } from 'components/btn-or-counter/BtnOrCounter';
import { useDiscount } from 'hooks/useDiscount';

interface CatalogItemProps {
    product: IProduct;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
    const { discount } = useDiscount(product);

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
                    <BtnOrCounter product={product} toggle={true} />
                </div>
            </div>
        </div>
    );
};
