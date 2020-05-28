import Product from '../Product';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductVariant from '../ProductVariant';
import Asset from '../../asset/Asset';
import ProductAssociation from '../../association/ProductAssociation';
import BaseTransformer from '../../../BaseTransformer';
export default class ProductTransformer extends BaseTransformer {
    mapData(product: ProductInterface): Product;
    includeAssets(product: ProductInterface): Array<Asset>;
    includeProductAssociations(product: ProductInterface): Array<ProductAssociation>;
    includeProductVariants(product: ProductInterface): Array<ProductVariant>;
    includeRelatedProducts(product: ProductInterface): Array<Product>;
}
