import ShippingAddonInterface from '../../Interfaces/delivery/ShippingAddon';

export default class ShippingAddon {
    constructor(parameters: ShippingAddonInterface) {
        Object.assign(this, parameters);
    }
}
