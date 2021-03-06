import ProductCollection from '../ProductCollection';
import ProductCollectionInterface from '../../../Interfaces/association/ProductCollection';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import AssetInterface from '../../../Interfaces/asset/Asset';
import AssetTransformer from '../../asset/Transformers/AssetTransformer';
import ProductTransformer from '../../product/Transformers/ProductTransformer';
import ProductAssociationTransformer from './ProductAssociationTransformer';
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
            featured: productCollection.featured,
            position: productCollection.position,
            associationClass: productCollection.associationClass,
            productsCount: productCollection.productsCount,
            // belongs to
            associated: this.includeAssociated(productCollection),
            // has many
            assets: this.includeAssets(productCollection),
            products: this.includeProducts(productCollection),
        });
    }

    includeAssociated(productCollection: ProductCollectionInterface): ProductAssociationInterface | null {
        return this.item(productCollection, 'associated', new ProductAssociationTransformer());
    }

    includeAssets(productCollection: ProductCollectionInterface): Array<AssetInterface> {
        return this.collection(productCollection, 'assets', new AssetTransformer());
    }

    includeProducts(productCollection: ProductCollectionInterface): Array<ProductInterface> {
        return this.collection(productCollection, 'products', new ProductTransformer());
    }
}
