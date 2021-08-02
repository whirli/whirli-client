import ProductVariant from '../ProductVariant';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import Product from '../Product';
import BaseTransformer from '../../../BaseTransformer';
import { BasketLine as BasketLineInterface } from '../../../Interfaces/basket/BasketLine';
import OrderLineInterface from '../../../Interfaces/order/OrderLine';
import StockInterface from '../../../Interfaces/stock/Stock';
import ReviewInterface from '../../../Interfaces/review/Review';
import StockCheckInterface from '../../../Interfaces/stock/StockCheck';
export default class ProductVariantTransformer extends BaseTransformer {
    mapData(productVariant: ProductVariantInterface): ProductVariant;
    includeProduct(productVariant: ProductVariantInterface): Product | null;
    includeBasketLines(productVariant: ProductVariantInterface): Array<BasketLineInterface> | undefined;
    includeStockChecks(productVariant: ProductVariantInterface): Array<StockCheckInterface> | undefined;
    includeOrderLines(productVariant: ProductVariantInterface): Array<OrderLineInterface> | undefined;
    includeStockObjects(productVariant: ProductVariantInterface): Array<StockInterface> | undefined;
    includeReviews(productVariant: ProductVariantInterface): Array<ReviewInterface> | undefined;
    includeAccountedForReviews(productVariant: ProductVariantInterface): Array<ReviewInterface> | undefined;
}
