import React from 'react';
import '../../style/container.css';
import { ButtonText } from '../UI/button';
import Input from '../UI/input/Input';
import { CatalogItem } from '../catalog-item';
import cl from './Catalog.module.css';
import { Link } from 'react-router-dom';

const Catalog = () => {
    return (
        <section className={cl.catalog} id="Catalog">
            <div className="container">
                <h2 className={cl.title}>Catalog</h2>
                <div className={cl.input}>
                    <Input />
                </div>
                <div className={cl.content}>
                    <Link to="/product">
                        <CatalogItem />
                    </Link>
                    <Link to="/product">
                        <CatalogItem />
                    </Link>
                    <Link to="/product">
                        <CatalogItem />
                    </Link>
                    <Link to="/product">
                        <CatalogItem />
                    </Link>
                    <Link to="/product">
                        <CatalogItem />
                    </Link>
                    <Link to="/product">
                        <CatalogItem />
                    </Link>
                    <Link to="/product">
                        <CatalogItem />
                    </Link>
                    <Link to="/product">
                        <CatalogItem />
                    </Link>
                    <Link to="/product">
                        <CatalogItem />
                    </Link>
                    <Link to="/product">
                        <CatalogItem />
                    </Link>
                    <Link to="/product">
                        <CatalogItem />
                    </Link>
                    <Link to="/product">
                        <CatalogItem />
                    </Link>
                </div>
                <div className={cl.btn}>
                    <ButtonText>Show more</ButtonText>
                </div>
            </div>
        </section>
    );
};

export default Catalog;
