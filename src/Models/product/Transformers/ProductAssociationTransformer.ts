import ProductAssociation from '../ProductAssociation';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductTransformer from '../../product/Transformers/ProductTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class ProductAssociationTransformer extends BaseTransformer {
    /**
     * Map a product-association response
     *
     * @param productAssociation
     */
    mapData(productAssociation: ProductAssociationInterface): ProductAssociation {
        return new ProductAssociation({
            id: productAssociation.id,
            name: productAssociation.name,
            active: productAssociation.active,
            position: productAssociation.position,
            associationClass: productAssociation.associationClass,
            productsCount: productAssociation.productsCount,
            association: productAssociation.association,
            // has many
            products: this.includeProducts(productAssociation),
        });
    }

    includeProducts(productAssociation: ProductAssociationInterface): Array<ProductInterface> {
        return this.collection(productAssociation, 'products', new ProductTransformer());
    }
}
