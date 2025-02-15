import axiosInstance from './axios-instance';
import { ICartsInfo } from 'models/user';

export const fetchUpdateCarts = async (
    id: number,
    products: { id: number; quantity: number }[],
    merge: boolean = false,
) => {
    const response = await axiosInstance.put<ICartsInfo>(
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
