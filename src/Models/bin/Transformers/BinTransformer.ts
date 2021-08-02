import BaseTransformer from '../../../BaseTransformer';
import BinInterface from '../../../Interfaces/bin/Bin';
import Bin from '../Bin';
import StockInterface from '../../../Interfaces/stock/Stock';
import StockTransformer from '../../stock/Transformers/StockTransformer';

export default class BinTransformer extends BaseTransformer {
    /**
     * Map an stock response
     *
     * @param bin
     */
    mapData(bin: BinInterface): Bin {
        return new Bin({
            id: bin.id,
            name: bin.name,
            totalStock: bin.totalStock,
            createdAt: bin.createdAt,
            updatedAt: bin.updatedAt,
            stock: this.includeStocks(bin),
        });
    }

    includeStocks(bin: BinInterface): Array<StockInterface> | null {
        return this.collection(bin, 'stock', new StockTransformer());
    }
}
