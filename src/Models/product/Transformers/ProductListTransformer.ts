import BaseTransformer from '../../../BaseTransformer';
import ProductListInterface from '../../../Interfaces/product/ProductList';
import ProductList from '../ProductList';
import UserInterface from '../../../Interfaces/user/User';
import UserTransformer from '../../user/Transformers/UserTransformer';
import ProductListLineInterface from '../../../Interfaces/product/ProductListLine';
import ProductListLineTransformer from './ProductListLineTransformer';

export default class ProductListTransformer extends BaseTransformer {
    mapData(productList: ProductListInterface): ProductList {
        return new ProductList({
            id: productList.id,
            createdAt: productList.createdAt,
            updatedAt: productList.updatedAt,
            deletedAt: productList.deletedAt,
            name: productList.name,
            slug: productList.slug,
            type: productList.type,
            description: productList.description,
            public: productList.public,
            sharingSlug: productList.sharingSlug,
            // Belongs to
            user: this.includeUser(productList) || undefined,
            lines: this.includeProductListLines(productList),
        });
    }

    includeUser(productList: ProductListInterface): UserInterface | null {
        return this.item(productList, 'user', new UserTransformer());
    }

    includeProductListLines(productList: ProductListInterface): Array<ProductListLineInterface> {
        return this.collection(productList, 'lines', new ProductListLineTransformer());
    }
}
