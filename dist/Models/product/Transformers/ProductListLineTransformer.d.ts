import BaseTransformer from '../../../BaseTransformer';
import ProductListLineInterface from '../../../Interfaces/product/ProductListLine';
import ProductListLine from '../ProductListLine';
import ProductListInterface from '../../../Interfaces/product/ProductList';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
export default class ProductListLineTransformer extends BaseTransformer {
    mapData(productListLine: ProductListLineInterface): ProductListLine;
    includeProductList(productListLine: ProductListLineInterface): ProductListInterface | null;
    includeProductVariant(productListLine: ProductListLineInterface): ProductVariantInterface | null;
}
