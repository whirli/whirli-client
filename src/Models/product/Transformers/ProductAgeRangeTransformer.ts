import ProductAgeRange from '../ProductAgeRange';
import ProductAgeRangeInterface from '../../../Interfaces/product/ProductAgeRange';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/product/ProductAssociation';
import ProductTransformer from '../../product/Transformers/ProductTransformer';
import ProductAssociationTransformer from '../../product/Transformers/ProductAssociationTransformer';
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
            products: this.includeProducts(productAgeRange),
        });
    }

    includeAssociated(productAgeRange: ProductAgeRangeInterface): ProductAssociationInterface | null {
        return this.item(productAgeRange, 'associated', new ProductAssociationTransformer());
    }

    includeProducts(productAgeRange: ProductAgeRangeInterface): Array<ProductInterface> {
        return this.collection(productAgeRange, 'products', new ProductTransformer());
    }
}
