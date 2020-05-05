import ProductManufacturer from '../ProductManufacturer';
import ProductManufacturerInterface from '../../../Interfaces/association/ProductManufacturer';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import ProductTransformer from '../../product/Transformers/ProductTransformer';
import ProductAssociationTransformer from './ProductAssociationTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class ProductManufacturerTransformer extends BaseTransformer {
    /**
     * Map a product age range response
     *
     * @param productManufacturer
     */
    mapData(productManufacturer: ProductManufacturerInterface): ProductManufacturer {
        return new ProductManufacturer({
            id: productManufacturer.id,
            hasPage: productManufacturer.hasPage,
            slug: productManufacturer.slug,
            headerDescription: productManufacturer.headerDescription,
            headerImage: productManufacturer.headerImage,
            position: productManufacturer.position,
            associationClass: productManufacturer.associationClass,
            productsCount: productManufacturer.productsCount,
            // belongs to
            associated: this.includeAssociated(productManufacturer),
            // has many
            products: this.includeProducts(productManufacturer),
        });
    }

    includeAssociated(productManufacturer: ProductManufacturerInterface): ProductAssociationInterface | null {
        return this.item(productManufacturer, 'associated', new ProductAssociationTransformer());
    }

    includeProducts(productManufacturer: ProductManufacturerInterface): Array<ProductInterface> {
        return this.collection(productManufacturer, 'products', new ProductTransformer());
    }
}
