import { IProduct } from './i-product';

export interface IUser {
    totalQuantity: number;
    userId: number;
    products: IProduct[];
}
