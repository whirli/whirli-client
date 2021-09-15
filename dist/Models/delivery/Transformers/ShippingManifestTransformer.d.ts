import BaseTransformer from '../../../BaseTransformer';
import ShippingManifest from '../ShippingManifest';
import ShippingManifestInterface from '../../../Interfaces/delivery/ShippingManifestInterface';
import ShippingServiceInterface from '../../../Interfaces/delivery/ShippingServiceInterface';
export default class ShippingManifestTransformer extends BaseTransformer {
    mapData(shippingManifest: ShippingManifestInterface): ShippingManifest;
    includeShippingService(shippingManifest: ShippingManifestInterface): ShippingServiceInterface | null;
}
