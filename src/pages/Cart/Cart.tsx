import React from 'react';
import { Footer } from '../../components/footer';
import { NavBar } from '../../components/nav-bar';
import { ContentCart } from '../../components/content-cart';
import cl from './Cart.module.css';

export const Cart = () => {
    return (
        <div className={cl.container}>
            <div className={cl.content}>
                <NavBar />
                <ContentCart />
            </div>
            <div className={cl.footer}>
                <Footer />
            </div>
        </div>
    );
};
