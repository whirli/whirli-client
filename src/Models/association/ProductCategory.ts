import ProductCategoryInterface from '../../Interfaces/association/ProductCategory';

export default class ProductCategory {
    constructor(parameters: ProductCategoryInterface) {
        Object.assign(this, parameters);
    }
}
