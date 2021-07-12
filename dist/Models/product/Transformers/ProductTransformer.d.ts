import Product from '../Product';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductVariant from '../ProductVariant';
import Asset from '../../asset/Asset';
import ProductAssociation from '../../association/ProductAssociation';
import BaseTransformer from '../../../BaseTransformer';
import ProductAgeRange from '../../association/ProductAgeRange';
import ProductSkill from '../../association/ProductSkill';
export default class ProductTransformer extends BaseTransformer {
    mapData(product: ProductInterface): Product;
    includeOptimumAge(product: ProductInterface): ProductAgeRange | null;
    includePrimarySkill(product: ProductInterface): ProductSkill | null;
    includeAssets(product: ProductInterface): Array<Asset>;
    includeProductAssociations(product: ProductInterface): Array<ProductAssociation>;
    includeProductVariants(product: ProductInterface): Array<ProductVariant>;
    includeRelatedProducts(product: ProductInterface): Array<Product>;
}
