import React from 'react';
import cl from './ContentCart.module.css';
import '../../style/container.css';
import { CartItem } from '../cart-item';
import { Title } from '../UI/title';

export const ContentCart = () => {
    return (
        <section>
            <div className="container">
                <div className={cl.cart}>
                    <Title
                        tag="h1"
                        fontSize="xxl"
                        fontWeight="Bold"
                        className={cl.titleText}
                    >
                        My cart
                    </Title>
                    <div className={cl.content}>
                        <div className={cl.items}>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </div>
                        <div className={cl.prices}>
                            <div className={cl.count}>
                                <span className={cl.textCount}>
                                    Total count
                                </span>
                                <span className={cl.itemCount}>3 items</span>
                            </div>
                            <div className={cl.discount}>
                                <span className={cl.textDiscount}>
                                    Price without discount
                                </span>
                                <span className={cl.priceDiscount}>$700</span>
                            </div>
                            <div className={cl.line} />
                            <div className={cl.price}>
                                <span className={cl.textPrice}>
                                    Total price
                                </span>
                                <span className={cl.totalPrice}>$590</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
