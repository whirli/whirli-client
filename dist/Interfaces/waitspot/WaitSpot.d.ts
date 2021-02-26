import Product from '../product/Product';
export default interface ProductList {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    completedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    notifiedAt?: Date | string | null;
    product?: Product;
}
