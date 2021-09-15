import BaseTransformer from '../../../BaseTransformer';
import ShippingManifest from '../ShippingManifest';
import ShippingManifestInterface from '../../../Interfaces/delivery/ShippingManifestInterface';
import ShippingServiceInterface from '../../../Interfaces/delivery/ShippingServiceInterface';
import ShippingServiceTransformer from './ShippingServiceTransformer';

export default class ShippingManifestTransformer extends BaseTransformer {
    /**
     * Map an shippingManifest response
     *
     * @param shippingManifest
     */
    mapData(shippingManifest: ShippingManifestInterface): ShippingManifest {
        return new ShippingManifest({
            id: shippingManifest.id,
            createdAt: shippingManifest.createdAt,
            updatedAt: shippingManifest.updatedAt,
            barcode: shippingManifest.barcode,
            parcels: shippingManifest.parcels,
            oversized: shippingManifest.oversized,
            shippingService: this.includeShippingService(shippingManifest) || undefined,
        });
    }

    includeShippingService(shippingManifest: ShippingManifestInterface): ShippingServiceInterface | null {
        return this.item(shippingManifest, 'shippingService', new ShippingServiceTransformer());
    }
}
