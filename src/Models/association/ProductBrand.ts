import ProductBrandInterface from '../../Interfaces/association/ProductBrand';

export default class ProductBrand {
    constructor(parameters: ProductBrandInterface) {
        Object.assign(this, parameters);
    }
}
