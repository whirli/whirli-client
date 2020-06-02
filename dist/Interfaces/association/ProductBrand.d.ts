import Product from '../product/Product';
import Asset from '../asset/Asset';
import ProductAssociation from './ProductAssociation';
export default interface ProductBrand {
    id?: string;
    hasPage?: boolean;
    slug?: string;
    headerDescription?: string;
    headerImage?: string;
    position?: number;
    associationClass?: string;
    productsCount?: number;
    associated?: ProductAssociation | null;
    assets?: Array<Asset>;
    products?: Array<Product>;
}
