import ProductAssociation from '../ProductAssociation';
import ProductAssociationInterface from '../../../Interfaces/product/ProductAssociation';
import ProductInterface from '../../../Interfaces/product/Product';
import BaseTransformer from '../../../BaseTransformer';
export default class ProductAssociationTransformer extends BaseTransformer {
    mapData(productAssociation: ProductAssociationInterface): ProductAssociation;
    includeProducts(productAssociation: ProductAssociationInterface): Array<ProductInterface>;
}
