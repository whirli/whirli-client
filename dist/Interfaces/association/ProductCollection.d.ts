import Product from '../product/Product';
import Asset from '../asset/Asset';
import ProductAssociation from './ProductAssociation';
export default interface ProductCollection {
    id?: string;
    hasPage?: boolean;
    slug?: string;
    headerDescription?: string;
    headerImage?: string;
    featured?: boolean;
    position?: number;
    associationClass?: string;
    productsCount?: number;
    associated?: ProductAssociation | null;
    assets?: Array<Asset>;
    products?: Array<Product>;
}
