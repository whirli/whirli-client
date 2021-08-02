import BaseTransformer from '../../../BaseTransformer';
import StockCheckInterface from '../../../Interfaces/stock/StockCheck';
import StockCheck from '../StockCheck';
import UserInterface from '../../../Interfaces/user/User';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
export default class StockCheckTransformer extends BaseTransformer {
    mapData(stockCheck: StockCheckInterface): StockCheck;
    includeUser(stockCheck: StockCheckInterface): UserInterface | null;
    includeProductVariant(stockCheck: StockCheckInterface): ProductVariantInterface | null;
}
