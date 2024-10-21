import cl from './NavBar.module.css';
import logo from '../../img/Logo.svg';

const NavBar = () => {
  return (
    <div className={cl.navbar}>   
        <div className={cl.logo}>
            <img src={logo} alt="" />
        </div>
        <div className={cl.items}>
            <ul>
                <li className={cl.item}><a href="#">Catalog</a></li>
                <li className={cl.item}><a href="#">FAQ</a></li>
                <li className={cl.item}><a href="#">Cart</a></li>
                <li className={cl.item}><a href="#">Johnson Smith</a></li>
            </ul>
        </div>
    </div>
  )
};

export default NavBar;
