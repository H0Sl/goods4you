import { useGetCurrentUserQuery } from 'api/login-user-api';
import { useCartLoading } from 'hooks/useCartLoading';

export const CartLoading = () => {
    const { currentData } = useGetCurrentUserQuery();
    const id: number = currentData?.id ?? 0;

    useCartLoading(id);

    return null;
};
