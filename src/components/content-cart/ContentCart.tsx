import React from 'react';
import cl from './ContentCart.module.css';
import '../../style/container.css';
import CartItem from '../cart-item/CartItem';

const ContentCart = () => {
    return (
        <section>
            <div className="container">
                <div className={cl.cart}>
                    <h3 className={cl.titleText}>My cart</h3>
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

export default ContentCart;
