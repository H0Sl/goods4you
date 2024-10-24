import React from 'react';
import cl from './NavBar.module.css';
import logo from '../../img/Logo.svg';
import '../../style/container.css';

const NavBar = () => {
  return (
    <div className={cl.navbar}>
      <div className="container">
        <div className={cl.content}>   
            <div className={cl.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={cl.items}>
                <ul>
                    <li className={cl.item}><a href="#Catalog">Catalog</a></li>
                    <li className={cl.item}><a href="#FAQ">FAQ</a></li>
                    <li className={cl.item}><a href="#">Cart</a></li>
                    <li className={cl.item}><a href="#">Johnson Smith</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
};

export default NavBar;
