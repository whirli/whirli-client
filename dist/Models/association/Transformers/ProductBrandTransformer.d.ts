import ProductBrand from '../ProductBrand';
import ProductBrandInterface from '../../../Interfaces/association/ProductBrand';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import AssetInterface from '../../../Interfaces/asset/Asset';
import BaseTransformer from '../../../BaseTransformer';
export default class ProductBrandTransformer extends BaseTransformer {
    mapData(productBrand: ProductBrandInterface): ProductBrand;
    includeAssociated(productBrand: ProductBrandInterface): ProductAssociationInterface | null;
    includeAssets(productBrand: ProductBrandInterface): Array<AssetInterface>;
    includeProducts(productBrand: ProductBrandInterface): Array<ProductInterface>;
}
