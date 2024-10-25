import React from 'react';
import cl from './CatalogItem.module.css';
import img from '../../img/CatalogItem.svg';
import ButtonPrice from '../UI/button-price/ButtonPrice';

const CatalogItem = () => {
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
                <ButtonPrice />
            </div>
        </div>
    );
};

export default CatalogItem;
