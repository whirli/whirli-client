import ProductHazard from '../ProductHazard';
import ProductHazardInterface from '../../../Interfaces/product/ProductHazard';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/product/ProductAssociation';
import BaseTransformer from '../../../BaseTransformer';
export default class ProductHazardTransformer extends BaseTransformer {
    mapData(productHazard: ProductHazardInterface): ProductHazard;
    includeAssociated(productHazard: ProductHazardInterface): ProductAssociationInterface | null;
    includeProducts(productHazard: ProductHazardInterface): Array<ProductInterface>;
}
