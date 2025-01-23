import { Title } from 'components/UI/title';
import { Link } from 'react-router-dom';
import 'style/container.css';
import cl from './LoginHeader.module.css';

export const LoginHeader = () => {
    return (
        <div className={cl.loginHeader}>
            <div className="container">
                <Title
                    tag="h1"
                    fontSize="xl"
                    fontWeight="Bold"
                    className={cl.logo}
                >
                    <Link to="/">Goods4you</Link>
                </Title>
            </div>
        </div>
    );
};
