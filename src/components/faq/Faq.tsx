import AddInfo from '../faq-add-info/AddInfo';
import cl from './Faq.module.css';

const info = [
    {
        a:'How can I track the status of my order?',
        b:'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'
    },
    {
        a:'What payment methods do you accept?',
        b:'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'
    },
    {
        a:'How can I return or exchange an item?',
        b:'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'
    },
]

const FAQ = () => {
  return (
    <section className={cl.faq}>
        <div className={cl.container}>
            <h1 className={cl.titleText}>faq</h1>
            <>
                <AddInfo info={info}/>
            </>
        </div>
    </section>
  )
};

export default FAQ;
