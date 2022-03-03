import ShippingServiceInterface from './ShippingServiceInterface';
export default interface ShippingManifestInterface {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    barcode?: string;
    parcels?: number;
    oversized?: boolean;
    weight?: number;
    collectionDate?: string;
    statusId?: number;
    shippingService?: ShippingServiceInterface | null;
    extraData?: Record<string, string>;
}
