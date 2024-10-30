import React from 'react';
import Footer from '../components/footer/Footer';
import NavBar from '../components/nav-bar/NavBar';
import ContentProduct from '../components/content-product/ContentProduct';
import cl from '../style/FlexFooter.module.css';

const Product = () => {
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

export default Product;
