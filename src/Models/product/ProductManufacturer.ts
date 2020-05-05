import ProductManufacturerInterface from '../../Interfaces/product/ProductManufacturer';

export default class ProductManufacturer {
    constructor(parameters: ProductManufacturerInterface) {
        Object.assign(this, parameters);
    }
}
