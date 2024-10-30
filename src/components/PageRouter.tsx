import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Product } from '../pages';
import { Home } from '../pages';
import { Cart } from '../pages';

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
