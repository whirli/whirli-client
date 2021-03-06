import Product from '../product/Product';
import ProductAssociation from './ProductAssociation';
export default interface ProductManufacturer {
    id?: string;
    position?: number;
    associationClass?: string;
    productsCount?: number;
    associated?: ProductAssociation | null;
    products?: Array<Product>;
}
