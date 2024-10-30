import React from 'react';
import Footer from '../components/footer/Footer';
import NavBar from '../components/nav-bar/NavBar';
import ContentCart from '../components/content-cart/ContentCart';
import cl from '../style/FlexFooter.module.css';

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
