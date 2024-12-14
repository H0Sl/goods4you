import axiosInstance from './axios-instance';

export const fetchCartsByUsers = async (id: number) => {
    const response = await axiosInstance.get(`/carts/user/${id}`, {});
    return response.data;
};
