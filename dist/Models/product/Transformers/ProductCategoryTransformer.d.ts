import ProductCategory from '../ProductCategory';
import ProductCategoryInterface from '../../../Interfaces/product/ProductCategory';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/product/ProductAssociation';
import BaseTransformer from '../../../BaseTransformer';
export default class ProductCategoryTransformer extends BaseTransformer {
    mapData(productCategory: ProductCategoryInterface): ProductCategory;
    includeAssociated(productCategory: ProductCategoryInterface): ProductAssociationInterface | null;
    includeProducts(productCategory: ProductCategoryInterface): Array<ProductInterface>;
}
