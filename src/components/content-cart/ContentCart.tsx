import cl from './ContentCart.module.css';
import '../../style/container.css';
import { Title } from '../UI/title';
import { useAppSelector } from '../../hooks/redux';
import { CartProduct } from '../cart-product/CartProduct';
import { CartPrice } from '../cart-price';

export const ContentCart = () => {
    const { carts } = useAppSelector(state => state.userSlice);

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
                            <CartProduct cart={carts} />
                            <CartPrice cart={carts} />
                        </div>
                    ) : (
                        <div className={cl.noElement}>No Items</div>
                    )}
                </div>
            </div>
        </section>
    );
};
