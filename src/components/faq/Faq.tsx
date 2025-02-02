import { Title } from 'components/UI/title';
import cl from './Faq.module.css';
import { AddInfo } from 'components/faq-add-info';
import 'style/container.css';

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
