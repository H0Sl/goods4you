import React from 'react';
import '../../style/container.css';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';
import CatalogItem from '../catalog-item/CatalogItem';
import cl from './Catalog.module.css';

const Catalog = () => {
  return (
    <section className={cl.catalog} id='Catalog'>
        <div className="container">
            <h2 className={cl.title}>Catalog</h2>
            <div className={cl.input}>
                <Input/>
            </div>
            <div className={cl.content}>
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
            </div>
            <div className={cl.btn}>
                <Button text={'Show more'}/>
            </div>
        </div>
    </section>
  )
};

export default Catalog;
