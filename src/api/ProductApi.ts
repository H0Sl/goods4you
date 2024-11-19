import { IProduct } from '../models/IProduct';
import axiosInstance from './AxiosInstance';

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
