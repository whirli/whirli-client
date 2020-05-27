import ProductCategory from '../ProductCategory';
import ProductCategoryInterface from '../../../Interfaces/association/ProductCategory';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import AssetInterface from '../../../Interfaces/asset/Asset';
import AssetTransformer from '../../asset/Transformers/AssetTransformer';
import ProductTransformer from '../../product/Transformers/ProductTransformer';
import ProductAssociationTransformer from './ProductAssociationTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class ProductCategoryTransformer extends BaseTransformer {
    /**
     * Map a product age range response
     *
     * @param productCategory
     */
    mapData(productCategory: ProductCategoryInterface): ProductCategory {
        return new ProductCategory({
            id: productCategory.id,
            hasPage: productCategory.hasPage,
            slug: productCategory.slug,
            headerDescription: productCategory.headerDescription,
            headerImage: productCategory.headerImage,
            position: productCategory.position,
            associationClass: productCategory.associationClass,
            productsCount: productCategory.productsCount,
            // belongs to
            associated: this.includeAssociated(productCategory),
            // has many
            assets: this.includeAssets(productCategory),
            products: this.includeProducts(productCategory),
        });
    }

    includeAssociated(productCategory: ProductCategoryInterface): ProductAssociationInterface | null {
        return this.item(productCategory, 'associated', new ProductAssociationTransformer());
    }

    includeAssets(productCategory: ProductCategoryInterface): Array<AssetInterface> {
        return this.collection(productCategory, 'assets', new AssetTransformer());
    }

    includeProducts(productCategory: ProductCategoryInterface): Array<ProductInterface> {
        return this.collection(productCategory, 'products', new ProductTransformer());
    }
}
