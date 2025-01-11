import React from 'react';
import { Link } from 'react-router-dom';
import cl from './CartProduct.module.css';
import { ICartsInfo } from 'models/user';
import { CartItem } from 'components/cart-item';

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
