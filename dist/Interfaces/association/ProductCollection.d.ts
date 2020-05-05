import Product from '../product/Product';
import ProductAssociation from './ProductAssociation';
export default interface ProductCollection {
    id?: string;
    hasPage?: boolean;
    slug?: string;
    headerDescription?: string;
    headerImage?: string;
    position?: number;
    associationClass: string;
    productsCount?: number;
    associated?: ProductAssociation | null;
    products?: Array<Product>;
}
