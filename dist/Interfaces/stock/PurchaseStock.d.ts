import ProductVariant from '../product/ProductVariant';
import User from '../user/User';
export default interface PurchaseStock {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string;
    statusId?: number;
    productVariant?: ProductVariant;
    user?: User;
    availableForOrder?: boolean;
    daysToKeep?: number;
    orderDate?: Date | string | null;
    daysHeld?: Date | string | null;
    keepPrice?: number | null;
}
