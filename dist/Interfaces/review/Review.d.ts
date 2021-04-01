import ProductVariant from '../product/ProductVariant';
import User from '../user/User';
export default interface Review {
    id: string | null;
    rating: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: User;
    productVariant?: ProductVariant;
}
