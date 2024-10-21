import AddInfo from '../faq-add-info/AddInfo';
import cl from './Faq.module.css';

const FAQ = () => {
  return (
    <section className={cl.faq}>
        <div className={cl.container}>
            <h1 className={cl.titleText}>faq</h1>
            <>
                <div className={cl.line}></div>
                <AddInfo main={'How can I track the status of my order?'} text={'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'}/>
                <div className={cl.line}></div>
                <AddInfo main={'What payment methods do you accept?'} text={'What payment methods do you accept?'}/>
                <div className={cl.line}></div>
                <AddInfo main={'How can I return or exchange an item?'} text={'How can I return or exchange an item?'}/>
                <div className={cl.line}></div>
            </>
        </div>
    </section>
  )
};

export default FAQ;
