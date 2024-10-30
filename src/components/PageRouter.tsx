import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../pages/Product';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

const PageRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/product" element={<Product />} />
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </div>
    );
};

export default PageRouter;
