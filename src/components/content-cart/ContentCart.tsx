import cl from './ContentCart.module.css';
import '../../style/container.css';
import { CartItem } from '../cart-item';
import { Title } from '../UI/title';
import { useAppSelector } from '../../hooks/redux';

export const ContentCart = () => {
    const { carts } = useAppSelector(state => state.userSlice);

    const totalProducts = carts.totalProducts;
    const totalPrice = carts.total;
    const discountedTotal = carts.discountedTotal;
    const discount = totalPrice - discountedTotal;
    const price = totalPrice - discount;

    return (
        <section>
            <div className="container">
                <div className={cl.cart}>
                    <Title
                        tag="h1"
                        fontSize="xxl"
                        fontWeight="Bold"
                        className={cl.titleText}
                    >
                        My cart
                    </Title>
                    {carts.totalProducts > 0 ? (
                        <div className={cl.content}>
                            <div className={cl.items}>
                                {carts.products.map(product => (
                                    <CartItem
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>
                            <div className={cl.prices}>
                                <div className={cl.count}>
                                    <span className={cl.textCount}>
                                        Total count
                                    </span>
                                    <span className={cl.itemCount}>
                                        {totalProducts} items
                                    </span>
                                </div>
                                <div className={cl.discount}>
                                    <span className={cl.textDiscount}>
                                        Price without discount
                                    </span>
                                    <span className={cl.priceDiscount}>
                                        ${discount.toFixed(1)}
                                    </span>
                                </div>
                                <div className={cl.line} />
                                <div className={cl.price}>
                                    <span className={cl.textPrice}>
                                        Total price
                                    </span>
                                    <span className={cl.totalPrice}>
                                        ${price.toFixed(1)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={cl.noElement}>No Items</div>
                    )}
                </div>
            </div>
        </section>
    );
};
