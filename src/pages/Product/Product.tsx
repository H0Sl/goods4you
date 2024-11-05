import React from 'react';
import { Footer } from '../../components/footer';
import { NavBar } from '../../components/nav-bar';
import { ContentProduct } from '../../components/content-product';
import cl from './Product.module.css';

export const Product = () => {
    return (
        <div className={cl.container}>
            <div className={cl.content}>
                <NavBar />
                <ContentProduct />
            </div>
            <div className={cl.footer}>
                <Footer />
            </div>
        </div>
    );
};
