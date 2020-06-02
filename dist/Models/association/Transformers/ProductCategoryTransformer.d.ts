import ProductCategory from '../ProductCategory';
import ProductCategoryInterface from '../../../Interfaces/association/ProductCategory';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import AssetInterface from '../../../Interfaces/asset/Asset';
import BaseTransformer from '../../../BaseTransformer';
export default class ProductCategoryTransformer extends BaseTransformer {
    mapData(productCategory: ProductCategoryInterface): ProductCategory;
    includeAssociated(productCategory: ProductCategoryInterface): ProductAssociationInterface | null;
    includeAssets(productCategory: ProductCategoryInterface): Array<AssetInterface>;
    includeProducts(productCategory: ProductCategoryInterface): Array<ProductInterface>;
}
