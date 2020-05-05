import ProductCollection from '../ProductCollection';
import ProductCollectionInterface from '../../../Interfaces/product/ProductCollection';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/product/ProductAssociation';
import BaseTransformer from '../../../BaseTransformer';
export default class ProductCollectionTransformer extends BaseTransformer {
    mapData(productCollection: ProductCollectionInterface): ProductCollection;
    includeAssociated(productCollection: ProductCollectionInterface): ProductAssociationInterface | null;
    includeProducts(productCollection: ProductCollectionInterface): Array<ProductInterface>;
}
