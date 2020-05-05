import ProductAgeRange from '../ProductAgeRange';
import ProductAgeRangeInterface from '../../../Interfaces/product/ProductAgeRange';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/product/ProductAssociation';
import BaseTransformer from '../../../BaseTransformer';
export default class ProductAgeRangeTransformer extends BaseTransformer {
    mapData(productAgeRange: ProductAgeRangeInterface): ProductAgeRange;
    includeAssociated(productAgeRange: ProductAgeRangeInterface): ProductAssociationInterface | null;
    includeProducts(productAgeRange: ProductAgeRangeInterface): Array<ProductInterface>;
}
