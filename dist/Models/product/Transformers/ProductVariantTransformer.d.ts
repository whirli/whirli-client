import ProductVariant from '../ProductVariant';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import Product from '../Product';
import BaseTransformer from '../../../BaseTransformer';
export default class ProductVariantTransformer extends BaseTransformer {
    mapData(productVariant: ProductVariantInterface): ProductVariant;
    includeProduct(productVariant: ProductVariantInterface): Product | null;
}
