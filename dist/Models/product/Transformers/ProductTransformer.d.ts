import Product from '../Product';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import BaseTransformer from '../../../BaseTransformer';
export default class ProductTransformer extends BaseTransformer {
    mapData(product: ProductInterface): Product;
    includeProductVariant(product: ProductInterface[]): ProductVariantInterface[];
}
