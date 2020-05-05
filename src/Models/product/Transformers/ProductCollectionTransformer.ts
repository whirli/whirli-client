import ProductCollection from '../ProductCollection';
import ProductCollectionInterface from '../../../Interfaces/association/ProductCollection';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import ProductTransformer from '../../product/Transformers/ProductTransformer';
import ProductAssociationTransformer from '../../product/Transformers/ProductAssociationTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class ProductCollectionTransformer extends BaseTransformer {
    /**
     * Map a product age range response
     *
     * @param productCollection
     */
    mapData(productCollection: ProductCollectionInterface): ProductCollection {
        return new ProductCollection({
            id: productCollection.id,
            hasPage: productCollection.hasPage,
            slug: productCollection.slug,
            headerDescription: productCollection.headerDescription,
            headerImage: productCollection.headerImage,
            position: productCollection.position,
            associationClass: productCollection.associationClass,
            productsCount: productCollection.productsCount,
            // belongs to
            associated: this.includeAssociated(productCollection),
            // has many
            products: this.includeProducts(productCollection),
        });
    }

    includeAssociated(productCollection: ProductCollectionInterface): ProductAssociationInterface | null {
        return this.item(productCollection, 'associated', new ProductAssociationTransformer());
    }

    includeProducts(productCollection: ProductCollectionInterface): Array<ProductInterface> {
        return this.collection(productCollection, 'products', new ProductTransformer());
    }
}
