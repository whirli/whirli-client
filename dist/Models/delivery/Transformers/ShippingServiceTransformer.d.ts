import BaseTransformer from '../../../BaseTransformer';
import ShippingService from '../ShippingService';
import ShippingServiceInterface from '../../../Interfaces/delivery/ShippingServiceInterface';
export default class ShippingServiceTransformer extends BaseTransformer {
    mapData(shippingService: ShippingServiceInterface): ShippingService;
}
