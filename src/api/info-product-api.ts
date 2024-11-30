import axiosInstance from './axios-instance';

export const fetchProductInfo = async (id: number) => {
    const response = await axiosInstance.get(`/products/${id}`, {});
    return response.data;
};
