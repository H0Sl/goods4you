import cl from './ContentProduct.module.css';
import '../../style/container.css';
import { useParams } from 'react-router-dom';
import { ProductImg } from '../product-img/ProductImg';
import { useGetInfoQuery } from '../../api/info-product-api';
import { ProductText } from '../product-text/ProductText';
import { Title } from '../UI/title';

export const ContentProduct = () => {
    const { id } = useParams();
    const { data: product, isLoading } = useGetInfoQuery(String(id));
    return (
        <section className={cl.product}>
            <div className="container">
                {isLoading && (
                    <Title
                        tag="h2"
                        fontSize="xl"
                        fontWeight="Bold"
                        className={cl.isLoading}
                    >
                        Loading...
                    </Title>
                )}
                {product && (
                    <div className={cl.content}>
                        <ProductImg product={product} />
                        <ProductText product={product} />
                    </div>
                )}
            </div>
        </section>
    );
};
