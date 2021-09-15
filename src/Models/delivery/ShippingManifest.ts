import ShippingManifestInterface from '../../Interfaces/delivery/ShippingManifestInterface';

export default class ShippingManifest {
    constructor(parameters: ShippingManifestInterface) {
        Object.assign(this, parameters);
    }
}
