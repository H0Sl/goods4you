import { removeEmptyParams } from '../utils/remove-empty-params';
import axiosInstance from './axios-instance';

export const fetchProducts = async (
    query: string = '',
    skip: number,
    limit: number = 12,
) => {
    const response = await axiosInstance.get(`/products/search`, {
        params: {
            q: query,
            skip: skip,
            limit: limit,
        },
    });
    removeEmptyParams(response.config.params);
    return response.data;
};
