import React from 'react';
import { Catalog } from '../../components/catalog';
import { FAQ } from '../../components/faq';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { NavBar } from '../../components/nav-bar';

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
