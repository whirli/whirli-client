import Stock from '../stock/Stock';
import BinStock from './BinStock';
import ProductVariant from '../product/ProductVariant';

export default interface Bin {
    id?: string;
    name?: string;
    totalStock?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    // has many
    stock?: Array<Stock> | null;
    binStock?: Array<BinStock>;
    // accessors
    productVariants?: Array<ProductVariant>;
    totalProductVariants?: number;
}
