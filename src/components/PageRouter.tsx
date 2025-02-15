import { Route, Routes } from 'react-router-dom';
import { AuthCheck } from './auth-check';
import { lazy, Suspense } from 'react';
import { Layout } from './layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Cart = lazy(() => import('pages/Cart/Cart'));
const Login = lazy(() => import('pages/Login/Login'));
const Product = lazy(() => import('pages/Product/Product'));

const PageRouter = () => {
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Login />
                    </Suspense>
                }
            />
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={
                        <AuthCheck>
                            <Home />
                        </AuthCheck>
                    }
                />
                <Route
                    path="/product/:id"
                    element={
                        <AuthCheck>
                            <Product />
                        </AuthCheck>
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <AuthCheck>
                            <Cart />
                        </AuthCheck>
                    }
                />
                <Route path="/*" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default PageRouter;
