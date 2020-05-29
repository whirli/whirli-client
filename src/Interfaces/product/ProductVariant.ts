import Product from './Product';

export default interface ProductVariant {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    sku?: string;
    options?: string;
    price?: number;
    unitQty?: number;
    minQty?: number;
    minBatch?: number;
    maxQty?: number;
    stock?: number;
    incoming?: number;
    backorder?: string;
    requiresShipping?: number;
    weightValue?: number;
    weightUnit?: string;
    heightValue?: number;
    heightUnit?: string;
    widthValue?: number;
    widthUnit?: string;
    depthValue?: number;
    depthUnit?: string;
    volumeValue?: number;
    volumeUnit?: string;
    taxId?: number;
    groupPricing?: number;
    boxSizeId?: number;
    numberOfPieces?: number;
    batteriesRequired?: boolean;
    supplierSku?: string;
    supplierTradePrice?: number;
    supplierTokenMargin?: number;
    otherHazards?: string;
    // belongs to
    product?: Product | null;
}
