import React from 'react';
import '../../style/container.css';
import { Button } from '../UI/button';
import { Input } from '../UI/input';
import { CatalogItem } from '../catalog-item';
import cl from './Catalog.module.css';
import { Link } from 'react-router-dom';
import { Title } from '../UI/title';
import { productAPI } from '../../services/ProductServices';

export const Catalog = () => {
    const { data: products } = productAPI.useFetchAllProductsQuery(5);
    debugger;
    console.log(products);
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
                    <Input />
                </div>
                <div className={cl.content}>
                    {products &&
                        products.map(product => (
                            <Link to="/product">
                                <CatalogItem
                                    key={product.id}
                                    product={product}
                                />
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
