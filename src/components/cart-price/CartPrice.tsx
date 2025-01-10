import React from 'react';
import { ICartsInfo } from '../../models/user';
import cl from './CartPrice.module.css';

interface CartPriceProps {
    cart: ICartsInfo;
}

export const CartPrice: React.FC<CartPriceProps> = ({ cart }) => {
    const totalProducts = cart.totalProducts;
    const totalPrice = cart.total;
    const discountedTotal = cart.discountedTotal;
    const discount = totalPrice - discountedTotal;
    const price = totalPrice - discount;
    return (
        <div className={cl.prices}>
            <div className={cl.count}>
                <span className={cl.textCount}>Total count</span>
                <span className={cl.itemCount}>{totalProducts} items</span>
            </div>
            <div className={cl.discount}>
                <span className={cl.textDiscount}>Price without discount</span>
                <span className={cl.priceDiscount}>${discount.toFixed(1)}</span>
            </div>
            <div className={cl.line} />
            <div className={cl.price}>
                <span className={cl.textPrice}>Total price</span>
                <span className={cl.totalPrice}>${price.toFixed(1)}</span>
            </div>
        </div>
    );
};
