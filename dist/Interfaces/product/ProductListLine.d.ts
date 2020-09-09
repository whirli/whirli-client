import ProductList from './ProductList';
import ProductVariant from './ProductVariant';
export default interface ProductListLine {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gifted?: boolean;
    productList?: ProductList;
    productVariant?: ProductVariant;
}
