import { Button } from 'components/UI/button';
import { Title } from 'components/UI/title';
import 'style/container.css';
import cl from './LoginMain.module.css';
import { Input } from 'components/UI/input';

export const LoginMain = () => {
    return (
        <div className={cl.loginMain}>
            <div className="container">
                <div className={cl.content}>
                    <div className={cl.title}>
                        <Title tag="h1" fontWeight="Bold" fontSize="xxl">
                            Sign in
                        </Title>
                    </div>
                    <form action="" className={cl.form}>
                        <Input type="text">Email</Input>
                        <Input type="password">Password</Input>
                        <Button type="btnText">Sign in</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};
