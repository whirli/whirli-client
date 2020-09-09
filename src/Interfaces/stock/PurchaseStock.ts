import ProductVariant from '../product/ProductVariant';
import User from '../user/User';

export default interface PurchaseStock {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string;
    statusId?: number;
    // Belongs to
    productVariant?: ProductVariant;
    user?: User;
    // Accessors
    availableForOrder?: boolean;
    daysToKeep?: number;
    orderDate?: Date | string | null;
    daysHeld?: Date | string | null;
    keepPrice?: number | null;
}
