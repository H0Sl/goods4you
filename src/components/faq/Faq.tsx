import React from 'react';
import { AddInfo } from '../faq-add-info';
import cl from './Faq.module.css';
import '../../style/container.css';
import { Title } from '../UI/title';

const info = [
    {
        title: 'How can I track the status of my order?',
        text: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    },
    {
        title: 'What payment methods do you accept?',
        text: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    },
    {
        title: 'How can I return or exchange an item?',
        text: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    },
];

export const FAQ = () => {
    return (
        <section className={cl.faq} id="FAQ">
            <div className="container">
                <div className={cl.content}>
                    <Title
                        tag="h1"
                        fontSize="xxl"
                        fontWeight="Bold"
                        className={cl.titleText}
                    >
                        faq
                    </Title>
                    <AddInfo info={info} />
                </div>
            </div>
        </section>
    );
};
