import { IProduct } from '../models/product';
import { removeEmptyParams } from '../utils/remove-empty-params';
import axiosInstance from './axios-instance';

export type ProductsTypeResponse = {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
};

export const fetchProducts = async (
    query: string = '',
    skip: number,
    limit: number = 12,
) => {
    const response = await axiosInstance.get<ProductsTypeResponse>(
        `/products/search`,
        {
            params: {
                q: query,
                skip: skip,
                limit: limit,
            },
        },
    );
    removeEmptyParams(response.config.params);
    return response.data;
};
