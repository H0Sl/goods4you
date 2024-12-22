import { useState } from 'react';
import cl from './NavBar.module.css';
import '../../style/container.css';
import { Link } from 'react-router-dom';
import { Title } from '../UI/title';
import basket from '../../img/basket.png';
import { useAppSelector } from '../../hooks/redux';
import cn from 'classnames';

export const NavBar = () => {
    const { carts } = useAppSelector(state => state.userSlice);
    const { catalogData } = useAppSelector(state => state.productSlice);
    const [menuActive, setMenuActive] = useState(false);

    return (
        <nav className={cl.navbar}>
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
                    <div
                        className={
                            menuActive
                                ? cn(cl.menuIcon, cl.active)
                                : cl.menuIcon
                        }
                        onClick={() => setMenuActive(!menuActive)}
                    >
                        <span />
                    </div>
                    <div
                        className={
                            menuActive
                                ? cn(cl.menuList, cl.active)
                                : cl.menuList
                        }
                    >
                        <ul className={cl.list}>
                            <li className={cl.item}>
                                <Link to="/#Catalog">Catalog</Link>
                            </li>
                            <li className={cl.item}>
                                <Link to="/#FAQ">FAQ</Link>
                            </li>
                            <li className={cl.item}>
                                <div className={cl.basket}>
                                    <Link
                                        to="/cart"
                                        onClick={() => {
                                            catalogData.products = [];
                                        }}
                                    >
                                        Cart
                                    </Link>
                                    <img src={basket} alt="" />
                                    {carts.length > 0 ? (
                                        <div className={cl.counter}>
                                            <span>
                                                {carts[0].totalQuantity}
                                            </span>
                                        </div>
                                    ) : (
                                        <div />
                                    )}
                                </div>
                            </li>
                            <li className={cl.item}>
                                <a href="#">Johnson Smith</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
