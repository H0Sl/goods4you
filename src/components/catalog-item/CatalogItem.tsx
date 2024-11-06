import React from 'react';
import cl from './CatalogItem.module.css';
import img from '../../img/CatalogItem.svg';
import icon from '../../img/icon-price.svg';
import { Button } from '../UI/button';

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
                    <p className={cl.title}>Essence Mascara Lash Princess</p>
                    <span className={cl.price}>$110</span>
                </div>
                <Button className={cl.button}>
                    <img src={icon} className={cl.icon} alt="" />
                </Button>
            </div>
        </div>
    );
};
