import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginUser } from 'models/loginUser';

const baseUrl: string = import.meta.env.VITE_BASE_URL;

export const fetchLogin = createApi({
    reducerPath: 'fetchLogin',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: builder => ({
        login: builder.mutation<
            LoginUser,
            { username: string; password: string }
        >({
            query: body => ({
                url: 'auth/login',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(body),
            }),
        }),
        getCurrentUser: builder.query<LoginUser, { accessToken: string }>({
            query: accessToken => ({
                url: 'auth/me',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
        }),
    }),
});

export const { useLoginMutation, useGetCurrentUserQuery } = fetchLogin;
