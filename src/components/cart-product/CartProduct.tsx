import React from 'react';
import { ICartsInfo } from '../../models/user';
import { Link } from 'react-router-dom';
import { CartItem } from '../cart-item';
import cl from './CartProduct.module.css';

interface CartProductProps {
    cart: ICartsInfo;
}

export const CartProduct: React.FC<CartProductProps> = ({ cart }) => {
    return (
        <div className={cl.items}>
            {cart.products.map(product => (
                <Link key={product.id} to={`/product/${product.id}`}>
                    <CartItem key={product.id} product={product} />
                </Link>
            ))}
        </div>
    );
};
