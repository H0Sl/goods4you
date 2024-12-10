import axiosInstance from './axios-instance';

export const fetchUsers = async (id: number) => {
    const response = await axiosInstance.get(`/carts/user/${id}`, {});
    return response.data;
};
