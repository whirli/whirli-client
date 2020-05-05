import ProductAssociationInterface from '../../Interfaces/product/ProductAssociation';

export default class ProductAssociation {
    constructor(parameters: ProductAssociationInterface) {
        Object.assign(this, parameters);
    }
}
