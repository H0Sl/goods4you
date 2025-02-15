import { Suspense } from 'react';
import { NavBar } from '../nav-bar';
import { Footer } from '../footer';
import cl from './Layout.module.css';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className={cl.container}>
            <div className={cl.content}>
                <NavBar />
                <main>
                    <Suspense fallback={cl.loader}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
            <div className={cl.footer}>
                <Footer />
            </div>
        </div>
    );
};
