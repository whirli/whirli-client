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
    // belongs to
    associated?: ProductAssociation | null;
    // has many
    assets?: Array<Asset>;
    products?: Array<Product>;
}
