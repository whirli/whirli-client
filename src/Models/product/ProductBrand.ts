import ProductBrandInterface from '../../Interfaces/product/ProductBrand';

export default class ProductBrand {
    constructor(parameters: ProductBrandInterface) {
        Object.assign(this, parameters);
    }
}
