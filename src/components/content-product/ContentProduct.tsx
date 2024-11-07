import React from 'react';
import cl from './ContenProduct.module.css';
import '../../style/container.css';
import big from '../../img/proguct/big-photo.png';
import mini from '../../img/proguct/mini.png';
import star from '../../img/proguct/star.svg';
import { Button } from '../UI/button';

export const ContentProduct = () => {
    return (
        <section className={cl.product}>
            <div className="container">
                <div className={cl.content}>
                    <div className={cl.wrapper}>
                        <div className={cl.big}>
                            <img src={big} alt="" />
                        </div>
                        <div className={cl.small}>
                            <img src={mini} alt="" className={cl.mini} />
                            <img src={mini} alt="" className={cl.mini} />
                            <img src={mini} alt="" className={cl.mini} />
                            <img src={mini} alt="" className={cl.mini} />
                            <img src={mini} alt="" className={cl.mini} />
                            <img src={mini} alt="" className={cl.mini} />
                        </div>
                    </div>
                    <div className={cl.text}>
                        <h2 className={cl.title}>
                            Essence Mascara Lash Princess
                        </h2>
                        <div>
                            <div className={cl.star}>
                                <img src={star} alt="" />
                                <span>electronics, selfie accessories</span>
                            </div>
                        </div>
                        <div className={cl.line} />
                        <span className={cl.red}>In Stock - Only 5 left!</span>
                        <div className={cl.line} />
                        <p>
                            The Essence Mascara Lash Princess is a popular
                            mascara known for its volumizing and lengthening
                            effects. Achieve dramatic lashes with this
                            long-lasting and cruelty-free formula.
                        </p>
                        <span className={cl.span}>1 month warranty</span>
                        <span className={cl.span}>Ships in 1 month</span>
                        <div className={cl.add}>
                            <div className={cl.block}>
                                <div className={cl.prices}>
                                    <span className={cl.upPrice}>$7.17</span>
                                    <span className={cl.downPrice}>$9.99</span>
                                </div>
                                <div className={cl.rowSpan}>
                                    <span>Your discount:</span>
                                    <span>14.5%</span>
                                </div>
                            </div>
                            <Button
                                className={cl.button}
                                view="text"
                                size="small"
                            >
                                <span className={cl.btnSpan}>Add to cart</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
