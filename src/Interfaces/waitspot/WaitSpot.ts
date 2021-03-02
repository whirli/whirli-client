import ProductVariant from '../product/ProductVariant';
import User from '../user/User';

export default interface WaitSpot {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    notifiedAt?: Date | string | null;
    // Belongs to
    user?: User;
    productVariant?: ProductVariant;
}
