import { IProduct } from '../models/product';
import axiosInstance from './axios-instance';

export const fetchProductInfo = async (id: number) => {
    const response = await axiosInstance.get<IProduct>(`/products/${id}`, {});
    return response.data;
};
