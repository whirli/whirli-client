import ProductList from './ProductList';
import ProductVariant from './ProductVariant';

export default interface ProductListLine {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gifted?: boolean;
    // Belongs to
    productList?: ProductList;
    productVariant?: ProductVariant;
}
