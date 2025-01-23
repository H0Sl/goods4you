import { Route, Routes } from 'react-router-dom';
import { Product } from 'pages/Product';
import { Home } from 'pages/Home';
import { Cart } from 'pages/Cart';
import { Login } from 'pages/Login';

const PageRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/product/:id" element={<Product />} />
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/*" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default PageRouter;
