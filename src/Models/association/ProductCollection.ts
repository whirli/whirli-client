import ProductCollectionInterface from '../../Interfaces/association/ProductCollection';

export default class ProductCollection {
    constructor(parameters: ProductCollectionInterface) {
        Object.assign(this, parameters);
    }
}
