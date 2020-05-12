import ProductHazardInterface from '../../Interfaces/association/ProductHazard';

export default class ProductHazard {
    constructor(parameters: ProductHazardInterface) {
        Object.assign(this, parameters);
    }
}
