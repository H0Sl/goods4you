import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Product } from '../pages/product';
import { Home } from '../pages/home';
import { Cart } from '../pages/cart';

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
