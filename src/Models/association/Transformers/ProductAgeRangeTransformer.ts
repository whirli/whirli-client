import ProductAgeRange from '../ProductAgeRange';
import ProductAgeRangeInterface from '../../../Interfaces/association/ProductAgeRange';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import AssetInterface from '../../../Interfaces/asset/Asset';
import AssetTransformer from '../../asset/Transformers/AssetTransformer';
import ProductTransformer from '../../product/Transformers/ProductTransformer';
import ProductAssociationTransformer from './ProductAssociationTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class ProductAgeRangeTransformer extends BaseTransformer {
    /**
     * Map a product age range response
     *
     * @param productAgeRange
     */
    mapData(productAgeRange: ProductAgeRangeInterface): ProductAgeRange {
        return new ProductAgeRange({
            id: productAgeRange.id,
            hasPage: productAgeRange.hasPage,
            slug: productAgeRange.slug,
            headerDescription: productAgeRange.headerDescription,
            headerImage: productAgeRange.headerImage,
            position: productAgeRange.position,
            associationClass: productAgeRange.associationClass,
            productsCount: productAgeRange.productsCount,
            // belongs to
            associated: this.includeAssociated(productAgeRange),
            // has many
            assets: this.includeAssets(productAgeRange),
            products: this.includeProducts(productAgeRange),
        });
    }

    includeAssociated(productAgeRange: ProductAgeRangeInterface): ProductAssociationInterface | null {
        return this.item(productAgeRange, 'associated', new ProductAssociationTransformer());
    }

    includeAssets(productAgeRange: ProductAgeRangeInterface): Array<AssetInterface> {
        return this.collection(productAgeRange, 'assets', new AssetTransformer());
    }

    includeProducts(productAgeRange: ProductAgeRangeInterface): Array<ProductInterface> {
        return this.collection(productAgeRange, 'products', new ProductTransformer());
    }
}
