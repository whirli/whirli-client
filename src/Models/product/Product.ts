import ProductInterface from '../../Interfaces/product/Product';

export default class Product {
    constructor(parameters: ProductInterface) {
        Object.assign(this, parameters);
    }
}
