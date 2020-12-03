import ProductListLineInterface from '../../Interfaces/product/ProductListLine';

export default class ProductListLine {
    constructor(parameters: ProductListLineInterface) {
        Object.assign(this, parameters);
    }
}
