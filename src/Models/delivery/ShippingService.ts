import ShippingServiceInterface from '../../Interfaces/delivery/ShippingServiceInterface';

export default class ShippingService {
    constructor(parameters: ShippingServiceInterface) {
        Object.assign(this, parameters);
    }
}
