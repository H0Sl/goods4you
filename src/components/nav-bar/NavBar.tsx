import React from 'react';
import cl from './NavBar.module.css';
import '../../style/container.css';
import { Link } from 'react-router-dom';
import { Title } from '../UI/title';
import basket from '../../img/basket.png';

export const NavBar = () => {
    return (
        <div className={cl.navbar}>
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
                                <Link to="/#Catalog">Catalog</Link>
                            </li>
                            <li className={cl.item}>
                                <Link to="/#FAQ">FAQ</Link>
                            </li>
                            <li className={cl.item}>
                                <div className={cl.basket}>
                                    <Link to="/cart">Cart</Link>
                                    <img src={basket} alt="" />
                                    <div className={cl.counter}>
                                        <span>1</span>
                                    </div>
                                </div>
                            </li>
                            <li className={cl.item}>
                                <a href="#">Johnson Smith</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
