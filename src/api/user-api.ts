import axiosInstance from './axios-instance';

export const fetchUsers = async () => {
    const response = await axiosInstance.get(`/carts`, {
        params: {},
    });
    return response.data;
};
