import AddInfo from '../faq-add-info/AddInfo';
import cl from './Faq.module.css';
import '../../style/container.css';

const info = [
    {
        title:'How can I track the status of my order?',
        text:'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'
    },
    {
        title:'What payment methods do you accept?',
        text:'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'
    },
    {
        title:'How can I return or exchange an item?',
        text:'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'
    },
]

const FAQ = () => {
  return (
    <section className={cl.faq}>
        <div className='container'>
            <div className={cl.content}>
                <h1 className={cl.titleText}>faq</h1>
                <AddInfo info={info}/>
            </div>
        </div>
    </section>
  )
};

export default FAQ;
