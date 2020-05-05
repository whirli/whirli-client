import ProductManufacturerInterface from '../../Interfaces/association/ProductManufacturer';

export default class ProductManufacturer {
    constructor(parameters: ProductManufacturerInterface) {
        Object.assign(this, parameters);
    }
}
