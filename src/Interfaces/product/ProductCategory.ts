import Product from './Product';
import ProductAssociation from './ProductAssociation';

export default interface ProductCategory {
    id?: string;
    hasPage?: boolean;
    slug?: string;
    headerDescription?: string;
    headerImage?: string;
    position?: number;
    associationClass: string;
    productsCount?: number;
    // belongs to
    associated?: ProductAssociation | null;
    // has many
    products?: Array<Product>;
}
