import BaseTransformer from '../../../BaseTransformer';
import BinInterface from '../../../Interfaces/bin/Bin';
import Bin from '../Bin';
import StockInterface from '../../../Interfaces/stock/Stock';
export default class BinTransformer extends BaseTransformer {
    mapData(bin: BinInterface): Bin;
    includeStocks(bin: BinInterface): Array<StockInterface> | null;
}
