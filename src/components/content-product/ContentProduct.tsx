import React from 'react';
import cl from './ContenProduct.module.css';
import '../../style/container.css';
import big from '../../img/proguct/big-photo.png';

const ContentProduct = () => {
    return (
        <section className="cl.product">
            <div className="container">
                <div className={cl.content}>
                    <div className={cl.wrapper}>
                        <div className={cl.big}>
                            <img src={big} alt="" />
                        </div>
                        <div className={cl.small}>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className={cl.text} />
                </div>
            </div>
        </section>
    );
};

export default ContentProduct;
