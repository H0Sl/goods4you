import cl from './ContentProduct.module.css';
import '../../style/container.css';
import star from '../../img/product/star.svg';
import { Button } from '../UI/button';
import { Title } from '../UI/title';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProductsInfo } from '../../store/reducers/action-creators';
import { useParams } from 'react-router-dom';

export const ContentProduct = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { products, isLoading, error } = useAppSelector(
        state => state.infoProductSlice,
    );
    const discount = +(
        (products.price * products.discountPercentage) /
        100
    ).toFixed(1);
    useEffect(() => {
        dispatch(fetchProductsInfo({ id: Number(id) }));
    }, []);
    return (
        <section className={cl.product}>
            <div className="container">
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Error</h1>}
                <div className={cl.content}>
                    <div className={cl.wrapper}>
                        <div className={cl.big}>
                            <img src={products.thumbnail} />
                        </div>
                        <div className={cl.small}>
                            <img src={products.thumbnail} className={cl.mini} />
                            <img src={products.thumbnail} className={cl.mini} />
                            <img src={products.thumbnail} className={cl.mini} />
                            <img src={products.thumbnail} className={cl.mini} />
                            <img src={products.thumbnail} className={cl.mini} />
                            <img src={products.thumbnail} className={cl.mini} />
                        </div>
                    </div>
                    <div className={cl.text}>
                        <Title
                            tag="h1"
                            fontSize="xxl"
                            fontWeight="semiBold"
                            className={cl.title}
                        >
                            {products.title}
                        </Title>
                        <div>
                            <div className={cl.star}>
                                <img src={star} alt="" />
                                <span>electronics, selfie accessories</span>
                            </div>
                        </div>
                        <div className={cl.line} />
                        <span className={cl.red}>
                            In Stock - Only {products.stock} left!
                        </span>
                        <div className={cl.line} />
                        <p>{products.description}</p>
                        <span className={cl.span}>
                            {products.warrantyInformation}
                        </span>
                        <span className={cl.span}>
                            {products.shippingInformation}
                        </span>
                        <div className={cl.add}>
                            <div className={cl.block}>
                                <div className={cl.prices}>
                                    <span className={cl.upPrice}>
                                        $
                                        {(products.price - discount).toFixed(1)}
                                    </span>
                                    <span className={cl.downPrice}>
                                        ${products.price}
                                    </span>
                                </div>
                                <div className={cl.rowSpan}>
                                    <span>Your discount:</span>
                                    <span>{products.discountPercentage}%</span>
                                </div>
                            </div>
                            <Button
                                className={cl.button}
                                view="text"
                                size="small"
                            >
                                <span className={cl.btnSpan}>Add to cart</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
