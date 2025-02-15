import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginRequest } from 'models/loginRequest';
import { LoginResponse } from 'models/loginResponse';

const baseUrl: string = import.meta.env.VITE_BASE_URL;

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: headers => {
        const token = localStorage.getItem('accessToken');
        if (token) headers.set('Authorization', `Bearer ${token}`);
        return headers;
    },
});

export const fetchLogin = createApi({
    reducerPath: 'fetchLogin',
    baseQuery: async (args, api, extraOptions) => {
        const result = await baseQuery(args, api, extraOptions);
        if (result.error?.status === 401 && args.url !== '/login') {
            localStorage.removeItem('accessToken');
        }
        return result;
    },
    endpoints: builder => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: body => ({
                url: 'auth/login',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(body),
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    localStorage.setItem('accessToken', data.accessToken);
                    window.location.href = '/';
                } catch (error) {
                    alert('Login error');
                }
            },
        }),
        getCurrentUser: builder.query<LoginResponse, void>({
            query: () => 'auth/me',
        }),
    }),
});

export const { useLoginMutation, useGetCurrentUserQuery } = fetchLogin;
