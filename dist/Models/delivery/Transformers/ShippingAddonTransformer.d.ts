import ShippingAddon from '../ShippingAddon';
import ShippingAddonInterface from '../../../Interfaces/delivery/ShippingAddon';
import BaseTransformer from '../../../BaseTransformer';
export default class GiftTransformer extends BaseTransformer {
    mapData(shippingAddon: ShippingAddonInterface): ShippingAddon;
}
