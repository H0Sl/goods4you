import { useEffect } from 'react';
import { useAppDispatch } from 'hooks/redux';
import { fetchCartsByUser } from 'store/reducers/action-creators';
import { useGetCurrentUserQuery } from 'api/login-user-api';

export const useCartLoading = (id: number) => {
    const dispatch = useAppDispatch();
    const { currentData, isSuccess } = useGetCurrentUserQuery();

    useEffect(() => {
        if (isSuccess) {
            const source = dispatch(fetchCartsByUser({ id: id }));
            return () => {
                source.abort();
            };
        }
    }, [currentData, isSuccess]);
};
