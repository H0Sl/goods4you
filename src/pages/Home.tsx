import React from 'react';
import Catalog from '../components/catalog/Catalog';
import FAQ from '../components/faq/Faq';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import NavBar from '../components/nav-bar/NavBar';

export const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <Catalog />
            <FAQ />
            <Footer />
        </>
    );
};
