import UndeliverableDate from '../../Interfaces/delivery/UndeliverableDate';

export default class ShippingAddon {
    constructor(parameters: UndeliverableDate) {
        Object.assign(this, parameters);
    }
}
