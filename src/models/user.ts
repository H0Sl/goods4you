import { IProduct } from './product';

export interface ICartsInfo {
    id: number;
    products: IProduct[];
    total: number;
    discountedTotal: number;
    totalProducts: number;
    totalQuantity: number;
}
