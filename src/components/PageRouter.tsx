import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../Page/Product';
import Home from '../Page/Home';
const PageRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/product" element={<Product />} />
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </div>
    );
};

export default PageRouter;
