import { IProduct } from '../models/i-product';
import { removeEmptyParams } from '../utils/remove-empty-params';
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
    removeEmptyParams(response.config.params);
    return response.data;
};
