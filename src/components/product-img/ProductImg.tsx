import React, { useState } from 'react';
import { IProduct } from '../../models/product';
import cl from './ProductImg.module.css';

interface ProductImgProps {
    product: IProduct;
}

export const ProductImg: React.FC<ProductImgProps> = ({ product }) => {
    const initialImg: string = product?.thumbnail ?? '';
    const [stateImg, setStateImg] = useState<string>(initialImg);

    return (
        <div className={cl.wrapper}>
            {product.images.length > 1 ? (
                <div>
                    <div className={cl.big}>
                        <img src={stateImg} alt="" />
                    </div>
                    <div className={cl.small}>
                        {product.images.map(img => (
                            <img
                                key={img}
                                src={img}
                                className={cl.mini}
                                alt=""
                                onClick={() => setStateImg(img)}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className={cl.big}>
                    <img src={product.thumbnail} alt="" />
                </div>
            )}
        </div>
    );
};
