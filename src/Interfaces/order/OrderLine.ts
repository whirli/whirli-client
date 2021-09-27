import ProductVariant from '../product/ProductVariant';
import Order from './Order';
import Stock from '../stock/Stock';

export default interface OrderLine {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isShipping?: boolean;
    isManual?: boolean;
    quantity?: number;
    lineTotal?: number;
    unitPrice?: number;
    unitQty?: number;
    discountTotal?: number;
    deliveryTotal?: number;
    taxTotal?: number;
    taxRate?: number;
    sku?: string;
    description?: string;
    option?: string;
    deletedAt?: Date;
    meta?: string;
    // belongs to
    order?: Order | null;
    productVariant?: ProductVariant | null;
    stock?: Array<Stock>;
}
