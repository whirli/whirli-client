import Product from '../Product';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import AssetInterface from '../../../Interfaces/asset/Asset';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import BaseTransformer from '../../../BaseTransformer';
export default class ProductTransformer extends BaseTransformer {
    mapData(product: ProductInterface): Product;
    includeAssets(product: ProductInterface): AssetInterface[];
    includeProductAssociations(product: ProductInterface): ProductAssociationInterface[];
    includeProductVariants(product: ProductInterface): ProductVariantInterface[];
    includeRelatedProducts(product: ProductInterface): ProductInterface[];
}
