import ShippingServiceInterface from './ShippingServiceInterface';

export default interface ShippingManifestInterface {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    barcode?: string;
    parcels?: number;
    oversized?: boolean;
    shippingService?: ShippingServiceInterface | null;
}
