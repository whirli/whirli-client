import BaseTransformer from '../../../BaseTransformer';
import ProductListInterface from '../../../Interfaces/product/ProductList';
import ProductList from '../ProductList';
import UserInterface from '../../../Interfaces/user/User';
import ProductListLineInterface from '../../../Interfaces/product/ProductListLine';
export default class ProductListTransformer extends BaseTransformer {
    mapData(productList: ProductListInterface): ProductList;
    includeUser(productList: ProductListInterface): UserInterface | null;
    includeProductListLines(productList: ProductListInterface): Array<ProductListLineInterface>;
}
