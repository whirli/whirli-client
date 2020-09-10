import User from '../user/User';
import ProductListLine from './ProductListLine';

export default interface ProductList {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    name?: string;
    slug?: string;
    type?: string;
    description?: string;
    public?: boolean;
    sharingSlug?: string;
    // Belongs to
    user?: User;
    lines?: Array<ProductListLine>;
}
