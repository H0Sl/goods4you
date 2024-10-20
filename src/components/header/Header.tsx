import NavBar from '../navbar/NavBar';
import cl from './Header.module.css';
import '../../style/container.css';
import MyButton from '../UI/MyButton/MyButton';

const Header = () => {
  return (
    <header className={cl.header}>
        <div className="container">
            <NavBar/>
            <div className={cl.header__main}>
                <div className={cl.line}></div>
                <p className={cl.header__mainText}>Any products from famous brands<br/> with worldwide delivery</p>
                <p className={cl.header__text}>We sell smartphones, laptops, clothes, shoes<br/>and many other products at low prices</p>
                <div className={cl.header__btn}>
                    <MyButton text={'Go to shopping'}/>
                </div>
            </div>
            <span className={cl.header__backText}>Goods4you</span>
        </div>
    </header>
  )
};

export default Header;
