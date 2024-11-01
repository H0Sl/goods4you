import React from 'react';
import cl from './Header.module.css';
import '../../style/container.css';
import { ButtonText } from '../UI/button';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={cl.header}>
            <div className="container">
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
                        <Link to="#Catalog">
                            <ButtonText>Go to shopping</ButtonText>
                        </Link>
                    </div>
                </div>
                <span className={cl.backText}>Goods4you</span>
            </div>
        </header>
    );
};

export default Header;
