import ProductHazard from '../ProductHazard';
import ProductHazardInterface from '../../../Interfaces/association/ProductHazard';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import ProductTransformer from '../../product/Transformers/ProductTransformer';
import ProductAssociationTransformer from './ProductAssociationTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class ProductHazardTransformer extends BaseTransformer {
    /**
     * Map a product age range response
     *
     * @param productHazard
     */
    mapData(productHazard: ProductHazardInterface): ProductHazard {
        return new ProductHazard({
            id: productHazard.id,
            position: productHazard.position,
            associationClass: productHazard.associationClass,
            productsCount: productHazard.productsCount,
            // belongs to
            associated: this.includeAssociated(productHazard),
            // has many
            products: this.includeProducts(productHazard),
        });
    }

    includeAssociated(productHazard: ProductHazardInterface): ProductAssociationInterface | null {
        return this.item(productHazard, 'associated', new ProductAssociationTransformer());
    }

    includeProducts(productHazard: ProductHazardInterface): Array<ProductInterface> {
        return this.collection(productHazard, 'products', new ProductTransformer());
    }
}
