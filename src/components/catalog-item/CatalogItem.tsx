import React from 'react';
import cl from './CatalogItem.module.css';
import img from '../../img/CatalogItem.svg';
import icon from '../../img/icon-price.svg';
import { Button } from '../UI/button';
import { Title } from '../UI/title';
import { Text } from '../UI/text';

export const CatalogItem = () => {
    return (
        <div className={cl.item}>
            <div className={cl.img}>
                <img src={img} alt="" />
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
                        Essence Mascara Lash Princess
                    </Title>
                    <Text
                        tag="span"
                        fontWeight="regular"
                        fontSize="m"
                        className={cl.price}
                    >
                        $110
                    </Text>
                </div>
                <Button className={cl.button} view="icon" size="small">
                    <img src={icon} className={cl.icon} alt="" />
                </Button>
            </div>
        </div>
    );
};
