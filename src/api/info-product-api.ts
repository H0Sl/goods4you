import { IProduct } from 'models/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl: string = import.meta.env.VITE_BASE_URL;

export const fetchProductInf = createApi({
    reducerPath: 'fetchProductInf',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: build => ({
        getInfo: build.query<IProduct, string>({
            query: id => `/products/${id}`,
        }),
    }),
});

export const { useGetInfoQuery } = fetchProductInf;
