import BaseTransformer from '../../../BaseTransformer';
import BinStockInterface from '../../../Interfaces/bin/BinStock';
import BinStock from '../BinStock';
import BinInterface from '../../../Interfaces/bin/Bin';
import BinTransformer from './BinTransformer';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import ProductVariantTransformer from '../../product/Transformers/ProductVariantTransformer';
import StockInterface from '../../../Interfaces/stock/Stock';
import StockTransformer from '../../stock/Transformers/StockTransformer';

export default class BinStockTransformer extends BaseTransformer {
    mapData(binStock: BinStockInterface): BinStock {
        return new BinStock({
            id: binStock.id,
            createdAt: binStock.createdAt,
            updatedAt: binStock.updatedAt,
            bin: this.includeBin(binStock) || undefined,
            productVariant: this.includeProductVariant(binStock) || undefined,
            stock: this.includeStock(binStock) || undefined,
        });
    }

    includeBin(binStock: BinStockInterface): BinInterface | null {
        return this.item(binStock, 'bin', new BinTransformer());
    }

    includeProductVariant(binStock: BinStockInterface): ProductVariantInterface | null {
        return this.item(binStock, 'productVariant', new ProductVariantTransformer());
    }

    includeStock(binStock: BinStockInterface): StockInterface | null {
        return this.item(binStock, 'stock', new StockTransformer());
    }
}
