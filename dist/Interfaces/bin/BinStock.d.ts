import Bin from './Bin';
import ProductVariant from '../product/ProductVariant';
import Stock from '../stock/Stock';
export default interface BinStock {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bin?: Bin;
    productVariant?: ProductVariant;
    stock?: Stock;
}
