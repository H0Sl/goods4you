import { IProduct } from './product';

export interface IUser {
    totalQuantity: number;
    totalProducts: number;
    discountedTotal: number;
    total: number;
    products: IProduct[];
}
