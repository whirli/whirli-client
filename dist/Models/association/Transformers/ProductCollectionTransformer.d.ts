import ProductCollection from '../ProductCollection';
import ProductCollectionInterface from '../../../Interfaces/association/ProductCollection';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import AssetInterface from '../../../Interfaces/asset/Asset';
import BaseTransformer from '../../../BaseTransformer';
export default class ProductCollectionTransformer extends BaseTransformer {
    mapData(productCollection: ProductCollectionInterface): ProductCollection;
    includeAssociated(productCollection: ProductCollectionInterface): ProductAssociationInterface | null;
    includeAssets(productCollection: ProductCollectionInterface): Array<AssetInterface>;
    includeProducts(productCollection: ProductCollectionInterface): Array<ProductInterface>;
}
