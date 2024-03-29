import Product from './Product';
import { BasketLine } from '../basket/BasketLine';
import OrderLine from '../order/OrderLine';
import Stock from '../stock/Stock';
import Review from '../review/Review';
import Rating from '../review/Rating';
import StockCheck from '../stock/StockCheck';
import BinStock from '../bin/BinStock';
import Bin from '../bin/Bin';
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
    product?: Product | null;
    basketLines?: Array<BasketLine>;
    orderLines?: Array<OrderLine>;
    stockObjects?: Array<Stock>;
    stockChecks?: Array<StockCheck>;
    reviews?: Array<Review>;
    accountedForReviews?: Array<Review>;
    binStock?: Array<BinStock>;
    totalSafetyStock?: number;
    totalStockWithCustomer?: number;
    totalStockUnits?: number;
    totalOrders?: number;
    totalReturnedWriteOff?: number;
    totalSold?: number;
    totalReviews?: number;
    ratings?: Rating;
    bins?: Array<Bin>;
}
