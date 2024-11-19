import React, { ChangeEvent, useEffect, useState } from 'react';
import '../../style/container.css';
import { Button } from '../UI/button';
import { Input } from '../UI/input';
import { CatalogItem } from '../catalog-item';
import cl from './Catalog.module.css';
import { Link } from 'react-router-dom';
import { Title } from '../UI/title';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProduct } from '../../store/reducers/ActionCreators';

export const Catalog = () => {
    const dispatch = useAppDispatch();
    const { catalogData, isLoading, error } = useAppSelector(
        state => state.productSlice,
    );
    const [output, setOutput] = useState<string>('');
    const search = (event: ChangeEvent<HTMLInputElement>) => {
        setOutput(event.target.value);
    };
    useEffect(() => {
        dispatch(fetchProduct(output));
    }, [output]);

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
                    <Input onInput={search} />
                </div>
                <div className={cl.content}>
                    {isLoading && <h1>Идет загрузка</h1>}
                    {error && <h1>{error}</h1>}
                    {catalogData.products.map(product => (
                        <Link key={product.id} to="/product">
                            <CatalogItem product={product} />
                        </Link>
                    ))}
                </div>
                <div className={cl.btn}>
                    <Button className={cl.button} view="text" size="small">
                        <span className={cl.btnSpan}>Show more</span>
                    </Button>
                </div>
            </div>
        </section>
    );
};
