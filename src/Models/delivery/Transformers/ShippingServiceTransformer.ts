import BaseTransformer from '../../../BaseTransformer';
import ShippingService from '../ShippingService';
import ShippingServiceInterface from '../../../Interfaces/delivery/ShippingServiceInterface';

export default class ShippingServiceTransformer extends BaseTransformer {
    /**
     * Map an shipping addon response
     *
     * @param shippingService
     */
    mapData(shippingService: ShippingServiceInterface): ShippingService {
        return new ShippingService({
            name: shippingService.name,
            courier: shippingService.courier,
        });
    }
}
