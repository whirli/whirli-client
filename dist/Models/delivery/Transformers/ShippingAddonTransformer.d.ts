import ShippingAddon from '../ShippingAddon';
import ShippingAddonInterface from '../../../Interfaces/delivery/ShippingAddon';
import BaseTransformer from '../../../BaseTransformer';
export default class ShippingAddonTransformer extends BaseTransformer {
    mapData(shippingAddon: ShippingAddonInterface): ShippingAddon;
}
