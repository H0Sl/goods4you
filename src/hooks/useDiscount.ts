import { IProduct } from 'models/product';

export const useDiscount = (product: IProduct) => {
    const discount = +(
        (product.price * product.discountPercentage) /
        100
    ).toFixed(1);
    return {
        discount,
    };
};
