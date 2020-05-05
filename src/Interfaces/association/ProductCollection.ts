import Product from '../product/Product';
import ProductAssociation from './ProductAssociation';

export default interface ProductCollection {
    id?: string;
    hasPage?: boolean;
    slug?: string;
    headerDescription?: string;
    headerImage?: string;
    featured?: boolean;
    position?: number;
    associationClass: string;
    productsCount?: number;
    // belongs to
    associated?: ProductAssociation | null;
    // has many
    products?: Array<Product>;
}
