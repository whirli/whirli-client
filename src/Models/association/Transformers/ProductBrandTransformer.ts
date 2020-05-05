import ProductBrand from '../ProductBrand';
import ProductBrandInterface from '../../../Interfaces/association/ProductBrand';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import ProductTransformer from '../../product/Transformers/ProductTransformer';
import ProductAssociationTransformer from './ProductAssociationTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class ProductBrandTransformer extends BaseTransformer {
    /**
     * Map a product age range response
     *
     * @param productBrand
     */
    mapData(productBrand: ProductBrandInterface): ProductBrand {
        return new ProductBrand({
            id: productBrand.id,
            hasPage: productBrand.hasPage,
            slug: productBrand.slug,
            headerDescription: productBrand.headerDescription,
            headerImage: productBrand.headerImage,
            position: productBrand.position,
            associationClass: productBrand.associationClass,
            productsCount: productBrand.productsCount,
            // belongs to
            associated: this.includeAssociated(productBrand),
            // has many
            products: this.includeProducts(productBrand),
        });
    }

    includeAssociated(productBrand: ProductBrandInterface): ProductAssociationInterface | null {
        return this.item(productBrand, 'associated', new ProductAssociationTransformer());
    }

    includeProducts(productBrand: ProductBrandInterface): Array<ProductInterface> {
        return this.collection(productBrand, 'products', new ProductTransformer());
    }
}
