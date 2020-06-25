import ShippingAddon from '../ShippingAddon';
import ShippingAddonInterface from '../../../Interfaces/delivery/ShippingAddon';
import BaseTransformer from '../../../BaseTransformer';

export default class GiftTransformer extends BaseTransformer {
    /**
     * Map an shipping addon response
     *
     * @param shippingAddon
     */
    mapData(shippingAddon: ShippingAddonInterface): ShippingAddon {
        return new ShippingAddon({
            id: shippingAddon.id,
            name: shippingAddon.name,
            description: shippingAddon.description,
            originalCost: shippingAddon.originalCost,
            orderCheckoutCost: shippingAddon.orderCheckoutCost,
            typeId: shippingAddon.typeId,
            delay: shippingAddon.delay,
            expectedDeliveryDate: shippingAddon.expectedDeliveryDate,
        });
    }
}
