import cl from './Footer.module.css';
import 'style/container.css';
import { Link } from 'react-router-dom';
import { Title } from 'components/UI/title';

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
                                <Link to="/">Catalog</Link>
                            </li>
                            <li className={cl.item}>
                                <Link to="/#FAQ">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
