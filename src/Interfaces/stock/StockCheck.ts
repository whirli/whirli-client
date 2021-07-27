import User from '../user/User';
import ProductVariant from '../product/ProductVariant';

export default interface StockCheck {
    id: string;
    // has one
    user?: User | null;
    productVariant?: ProductVariant | null;
    checkedAt?: Date | string;
    previousTotal: number;
    verifiedTotal: number;
    createdAt: Date | string;
    updatedAt: Date | string;
}
