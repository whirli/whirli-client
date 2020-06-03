import ProductAgeRange from '../ProductAgeRange';
import ProductAgeRangeInterface from '../../../Interfaces/association/ProductAgeRange';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import AssetInterface from '../../../Interfaces/asset/Asset';
import BaseTransformer from '../../../BaseTransformer';
export default class ProductAgeRangeTransformer extends BaseTransformer {
    mapData(productAgeRange: ProductAgeRangeInterface): ProductAgeRange;
    includeAssociated(productAgeRange: ProductAgeRangeInterface): ProductAssociationInterface | null;
    includeAssets(productAgeRange: ProductAgeRangeInterface): Array<AssetInterface>;
    includeProducts(productAgeRange: ProductAgeRangeInterface): Array<ProductInterface>;
}
