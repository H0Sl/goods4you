import React from 'react';
import cl from './Footer.module.css';
import '../../style/container.css';
import { Link } from 'react-router-dom';
import { Title } from '../UI/title';

export const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className="container">
                <div className={cl.content}>
                    <Title
                        tag="h1"
                        fontSize="xl"
                        fontWeight="Bold"
                        className={cl.logo}
                    >
                        <Link to="/">Goods4you</Link>
                    </Title>
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
