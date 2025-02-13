import { IProduct } from 'models/product';
import axiosInstance from './axios-instance';

export type UpdateCart = {
    id: number;
    products: IProduct[];
    totalQuantity: number;
    totalProducts: number;
    total: number;
    discountedTotal: number;
};

export const fetchUpdateCarts = async (
    id: number,
    products: { id: number; quantity: number }[],
    merge: boolean = false,
) => {
    const response = await axiosInstance.put<UpdateCart>(
        `/carts/${id}`,
        {
            merge,
            products,
        },
        {
            headers: { 'Content-Type': 'application/json' },
        },
    );
    return response.data;
};
