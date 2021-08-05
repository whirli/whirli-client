import BaseTransformer from '../../../BaseTransformer';
import BinStockInterface from '../../../Interfaces/bin/BinStock';
import BinStock from '../BinStock';
import BinInterface from '../../../Interfaces/bin/Bin';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import StockInterface from '../../../Interfaces/stock/Stock';
export default class BinStockTransformer extends BaseTransformer {
    mapData(binStock: BinStockInterface): BinStock;
    includeBin(binStock: BinStockInterface): BinInterface | null;
    includeProductVariant(binStock: BinStockInterface): ProductVariantInterface | null;
    includeStock(binStock: BinStockInterface): StockInterface | null;
}
