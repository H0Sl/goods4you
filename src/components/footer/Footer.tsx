import cl from './Footer.module.css';
import '../../style/container.css';
import logo from '../../img/Logo.svg';

const Footer = () => {
  return (
    <footer className={cl.footer}>
        <div className="container">
            <div className={cl.content}>
                <div className={cl.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={cl.items}>
                    <ul>
                        <li className={cl.item}><a href="">Catalog</a></li>
                        <li className={cl.item}><a href="">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
};

export default Footer;
