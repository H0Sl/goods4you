import React from 'react';
import NavBar from '../nav-bar/NavBar';
import cl from './Header.module.css';
import '../../style/container.css';
import Button from '../UI/button/Button';

const Header = () => {
    return (
        <header className={cl.header}>
            <div className="container">
                <NavBar />
                <div className={cl.main}>
                    <div className={cl.line} />
                    <p className={cl.mainText}>
                        Any products from famous brands
                        <br /> with worldwide delivery
                    </p>
                    <p className={cl.text}>
                        We sell smartphones, laptops, clothes, shoes
                        <br />
                        and many other products at low prices
                    </p>
                    <div className={cl.btn}>
                        <a href="#Catalog">
                            <Button text="Go to shopping" />
                        </a>
                    </div>
                </div>
                <span className={cl.backText}>Goods4you</span>
            </div>
        </header>
    );
};

export default Header;
