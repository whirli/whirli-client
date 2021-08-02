import User from '../user/User';
import ProductVariant from '../product/ProductVariant';
export default interface StockCheck {
    id: string;
    user?: User | null;
    productVariant?: ProductVariant | null;
    checkedAt?: Date | string;
    previousTotal: number;
    verifiedTotal: number;
    createdAt: Date | string;
    updatedAt: Date | string;
}
