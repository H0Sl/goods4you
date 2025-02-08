import { IProduct } from 'models/product';
import { Title } from 'components/UI/title';
import cl from './ProductText.module.css';
import star from 'img/product/star.svg';
import { BtnOrCounter } from 'components/btn-or-counter/BtnOrCounter';
import { useDiscount } from 'hooks/useDiscount';

interface ProductTextProps {
    product: IProduct;
}

export const ProductText: React.FC<ProductTextProps> = ({ product }) => {
    const { discount } = useDiscount(product);
    return (
        <div className={cl.text}>
            <Title
                tag="h1"
                fontSize="xxl"
                fontWeight="semiBold"
                className={cl.title}
            >
                {product.title}
            </Title>
            <div>
                <div className={cl.star}>
                    <img src={star} alt="" />
                    <span>electronics, selfie accessories</span>
                </div>
            </div>
            <div className={cl.line} />
            <span className={cl.red}>
                In Stock - Only {product.stock} left!
            </span>
            <div className={cl.line} />
            <p>{product.description}</p>
            <span className={cl.span}>{product.warrantyInformation}</span>
            <span className={cl.span}>{product.shippingInformation}</span>
            <div className={cl.add}>
                <div className={cl.block}>
                    <div className={cl.prices}>
                        <span className={cl.upPrice}>
                            ${(product.price - discount).toFixed(1)}
                        </span>
                        <span className={cl.downPrice}>${product.price}</span>
                    </div>
                    <div className={cl.rowSpan}>
                        <span>Your discount:</span>
                        <span>{product.discountPercentage}%</span>
                    </div>
                </div>
                <BtnOrCounter product={product} toggle={false} />
            </div>
        </div>
    );
};
