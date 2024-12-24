import { ICartsInfo } from '../models/user';
import axiosInstance from './axios-instance';

export type CartsByUserTypeResponse = {
    carts: ICartsInfo[];
    total: number;
    skip: number;
    limit: number;
};

export const fetchCartsByUsers = async (id: number) => {
    const response = await axiosInstance.get<CartsByUserTypeResponse>(
        `/carts/user/${id}`,
        {},
    );
    return response.data;
};
