import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchCartsByUser } from '../../store/reducers/action-creators';

export const CartLoading = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const sourceCarts = dispatch(fetchCartsByUser({ id: 20 }));
        return () => {
            sourceCarts.abort();
        };
    }, []);

    return null;
};