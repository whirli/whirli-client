import Product from './Product';
import { BasketLine } from '../basket/BasketLine';
import OrderLine from '../order/OrderLine';
import Stock from '../stock/Stock';
import Review from '../review/Review';
import Rating from '../review/Rating';
import StockCheck from '../stock/StockCheck';

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
    supplierName?: string;
    aggregateRating?: number;
    stockCheckCounter?: number;
    // belongs to
    product?: Product | null;
    // has many
    basketLines?: Array<BasketLine>;
    orderLines?: Array<OrderLine>;
    stockObjects?: Array<Stock>;
    stockChecks?: Array<StockCheck>;
    reviews?: Array<Review>;
    accountedForReviews?: Array<Review>;
    // accessors
    totalSafetyStock?: number;
    totalStockWithCustomer?: number;
    totalStockUnits?: number;
    totalOrders?: number;
    totalReturnedDamaged?: number;
    totalSold?: number;
    totalReviews?: number;
    ratings?: Rating;
}
