import { Route, Routes } from 'react-router-dom';
import { Product } from 'pages/Product';
import { Home } from 'pages/Home';
import { Cart } from 'pages/Cart';
import { Login } from 'pages/Login';

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<Home />} />
        </Routes>
    );
};

export default PageRouter;
