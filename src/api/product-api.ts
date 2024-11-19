import { IProduct } from '../models/i-product';
import axiosInstance from './axios-instance';

export const fetchProducts = async (
    query: string = '',
    limit: number = 3,
): Promise<IProduct[]> => {
    const response = await axiosInstance.get<IProduct[]>(`/products/search`, {
        params: {
            q: query,
            limit: limit,
        },
    });
    return response.data;
};
