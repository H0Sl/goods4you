import cl from './ContentProduct.module.css';
import { useParams } from 'react-router-dom';
import { useGetInfoQuery } from 'api/info-product-api';
import { Title } from 'components/UI/title';
import { ProductImg } from 'components/product-img';
import { ProductText } from 'components/product-text';

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
