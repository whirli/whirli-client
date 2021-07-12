import Product from '../product/Product';
import Asset from '../asset/Asset';
import ProductAssociation from './ProductAssociation';
export default interface ProductSkill {
    id?: string;
    hasPage?: boolean;
    slug?: string;
    headerDescription?: string;
    headerImage?: string;
    position?: number;
    associationClass?: string;
    primaryDescription?: string;
    additionalDescription?: string;
    productsCount?: number;
    skillGroup?: number;
    associated?: ProductAssociation | null;
    assets?: Array<Asset>;
    products?: Array<Product>;
}
