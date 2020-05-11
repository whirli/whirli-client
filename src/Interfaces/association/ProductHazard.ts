import Product from '../product/Product';
import ProductAssociation from './ProductAssociation';

export default interface ProductHazard {
    id?: string;
    position?: number;
    associationClass: string;
    productsCount?: number;
    // belongs to
    associated?: ProductAssociation | null;
    // has many
    products?: Array<Product>;
}
