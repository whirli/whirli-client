import ProductAssociationInterface from '../../Interfaces/association/ProductAssociation';

export default class ProductAssociation {
    constructor(parameters: ProductAssociationInterface) {
        Object.assign(this, parameters);
    }
}
