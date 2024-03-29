import Stock from '../Stock';
import StockInterface from '../../../Interfaces/stock/Stock';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import UserInterface from '../../../Interfaces/user/User';
import ReturnOrderLineInterface from '../../../Interfaces/return/ReturnOrderLine';
import BinInterface from '../../../Interfaces/bin/Bin';
import BaseTransformer from '../../../BaseTransformer';
export default class StockTransformer extends BaseTransformer {
    mapData(stock: StockInterface): Stock;
    includeProductVariant(stock: StockInterface): ProductVariantInterface | null;
    includeUser(stock: StockInterface): UserInterface | null;
    includeBin(stock: StockInterface): BinInterface | null;
    includeReturnOrderLines(stock: StockInterface): ReturnOrderLineInterface[];
}
