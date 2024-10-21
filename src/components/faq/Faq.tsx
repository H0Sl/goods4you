import React, { useState } from 'react';
import cl from './Faq.module.css';

const FAQ: React.FC = () => {

    const [isActive, setIsActive] = useState<boolean>(false);

    const toggleActive = () => {
        setIsActive(prev => !prev)
        console.log(isActive)
    };
    if(isActive === true){
        
    }


  return (
    <section className={cl.faq}>
        <div className={cl.container}>
            <h1 className={cl.titleText}>faq</h1>
            <>
                <div className={cl.line}></div>
                <div className={cl.content}>
                    <p className={cl.mainText}>How can I track the status of my order?</p>
                    <div 
                        onClick={toggleActive}
                        className={cl.addInfo}></div>
                </div>
                <p className={cl.addText}>After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.</p>
                <div className={cl.line}></div>
                <div className={cl.content}>
                    <p className={cl.mainText}>What payment methods do you accept?</p>
                    <div className={cl.addInfo}></div>
                </div>
                <div className={cl.line}></div>
                <div className={cl.content}>
                    <p className={cl.mainText}>How can I return or exchange an item?</p>
                    <div className={cl.addInfo}></div>
                </div>
                <div className={cl.line}></div>
            </>
        </div>
    </section>
  )
};

export default FAQ;
