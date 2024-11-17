// import axios from 'axios';
// import { AppDispatch } from '../store';
// import { IProduct } from '../../models/IProduct';
// import { productSlice } from './ProductSlice';

// export const fetchProduct = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(productSlice.actions.productFetching());
//         const responce = await axios.get<IProduct[]>(
//             'https://dummyjson.com/products/',
//         );
//         dispatch(productSlice.actions.productFetchingSuccess(responce.data));
//     } catch (e) {
//         dispatch(productSlice.actions.productFetchingError(e.message));
//     }
// };
