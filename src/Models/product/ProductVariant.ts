import ProductVariantInterface from '../../Interfaces/product/ProductVariant';

export default class ProductVariant {
    constructor(parameters: ProductVariantInterface) {
        Object.assign(this, parameters);
    }
}
