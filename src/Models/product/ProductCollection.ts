import ProductCollectionInterface from '../../Interfaces/product/ProductCollection';

export default class ProductCollection {
    constructor(parameters: ProductCollectionInterface) {
        Object.assign(this, parameters);
    }
}
