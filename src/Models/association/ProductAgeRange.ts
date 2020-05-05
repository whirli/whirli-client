import ProductAgeRangeInterface from '../../Interfaces/association/ProductAgeRange';

export default class ProductAgeRange {
    constructor(parameters: ProductAgeRangeInterface) {
        Object.assign(this, parameters);
    }
}
