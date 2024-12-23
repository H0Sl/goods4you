import { IProduct } from './product';

export interface ICartsInfo {
    products: IProduct[];
    total: number;
    discountedTotal: number;
    totalProducts: number;
    totalQuantity: number;
}
