import { ChangeEvent, useEffect, useState } from 'react';
import '../../style/container.css';
import { Button } from '../UI/button';
import { Input } from '../UI/input';
import { CatalogItem } from '../catalog-item';
import cl from './Catalog.module.css';
import { Link } from 'react-router-dom';
import { Title } from '../UI/title';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProduct } from '../../store/reducers/action-creators';
import { Text } from '../UI/text';
import { resetProducts } from '../../store/reducers/product-slice';

export const Catalog = () => {
    const dispatch = useAppDispatch();
    const { catalogData, isLoading, error, skip, total } = useAppSelector(
        state => state.productSlice,
    );

    const [searchValue, setSearchValue] = useState<string>('');

    const search = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        dispatch(resetProducts());
    };

    const showMore = () => {
        dispatch(
            fetchProduct({
                q: searchValue,
                skip: skip + 12,
            }),
        );
    };

    useEffect(() => {
        const sourceProduct = dispatch(
            fetchProduct({ q: searchValue, skip: skip }),
        );
        return () => {
            sourceProduct.abort();
        };
    }, [searchValue]);

    return (
        <section className={cl.catalog} id="Catalog">
            <div className="container">
                <Title
                    tag="h1"
                    fontSize="xxl"
                    fontWeight="Bold"
                    className={cl.title}
                >
                    Catalog
                </Title>
                <div className={cl.input}>
                    <Input onChange={search} value={searchValue} />
                </div>
                {isLoading && <h1>Идет загрузка</h1>}
                {error && <h1>{error}</h1>}
                {catalogData.products.length === 0 ? (
                    <Text
                        className={cl.noElements}
                        fontSize="xl"
                        fontWeight="medium"
                        tag="p"
                    >
                        No Products
                    </Text>
                ) : (
                    <div className={cl.content}>
                        {catalogData.products.map(product => (
                            <Link
                                key={product.id}
                                to={`/product/${product.id}`}
                                onClick={() => {
                                    catalogData.products = [];
                                }}
                            >
                                <CatalogItem product={product} />
                            </Link>
                        ))}
                    </div>
                )}
                {catalogData.products.length >= total ? (
                    <div />
                ) : (
                    <div className={cl.btn}>
                        {}
                        <Button
                            className={cl.button}
                            view="text"
                            size="small"
                            onClick={showMore}
                        >
                            <span className={cl.btnSpan}>Show more</span>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};
