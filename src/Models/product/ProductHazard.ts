import ProductHazardInterface from '../../Interfaces/product/ProductHazard';

export default class ProductHazard {
    constructor(parameters: ProductHazardInterface) {
        Object.assign(this, parameters);
    }
}
