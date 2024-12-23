import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchCartsByUser } from '../../store/reducers/action-creators';

export const CartLoading = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const source = dispatch(fetchCartsByUser({ id: 23 }));
        return () => {
            source.abort();
        };
    }, []);

    return null;
};
