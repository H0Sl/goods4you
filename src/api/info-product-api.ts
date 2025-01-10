import { IProduct } from '../models/product';
import axiosInstance from './axios-instance';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fetchProductInfo = async (id: number) => {
    const response = await axiosInstance.get<IProduct>(`/products/${id}`, {});
    return response.data;
};

export const fetchProductInf = createApi({
    reducerPath: 'fetchProductInf',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: build => ({
        getInfo: build.query<IProduct, string>({
            query: id => `/products/${id}`,
        }),
    }),
});

export const { useGetInfoQuery } = fetchProductInf;
