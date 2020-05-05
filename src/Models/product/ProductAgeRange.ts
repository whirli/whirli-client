import ProductAgeRangeInterface from '../../Interfaces/product/ProductAgeRange';

export default class ProductAgeRange {
    constructor(parameters: ProductAgeRangeInterface) {
        Object.assign(this, parameters);
    }
}
