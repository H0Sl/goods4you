import { Button } from 'components/UI/button';
import { Title } from 'components/UI/title';
import 'style/container.css';
import cl from './LoginMain.module.css';
import { Input } from 'components/UI/input';
import { ChangeEvent, useState } from 'react';

export const LoginMain = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const newEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const newPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className={cl.loginMain}>
            <div className="container">
                <div className={cl.content}>
                    <div className={cl.title}>
                        <Title tag="h1" fontWeight="Bold" fontSize="xxl">
                            Sign in
                        </Title>
                    </div>
                    <form className={cl.form}>
                        <Input
                            onChange={newEmail}
                            value={email}
                            placeholder="Email"
                            type="text"
                        />
                        <Input
                            onChange={newPassword}
                            value={password}
                            placeholder="Password"
                            type="password"
                        />
                        <Button type="btnText">Sign in</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};
