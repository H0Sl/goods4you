import React from 'react';
import cl from './Footer.module.css';
import '../../style/container.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className="container">
                <div className={cl.content}>
                    <div className={cl.logo}>
                        <Link to="/">Goods4you</Link>
                    </div>
                    <div className={cl.items}>
                        <ul>
                            <li className={cl.item}>
                                <a href="">Catalog</a>
                            </li>
                            <li className={cl.item}>
                                <a href="">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
