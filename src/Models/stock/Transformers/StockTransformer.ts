import Stock from '../Stock';
import StockInterface from '../../../Interfaces/stock/Stock';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import UserInterface from '../../../Interfaces/user/User';
import ReturnOrderLineInterface from '../../../Interfaces/return/ReturnOrderLine';
import BinInterface from '../../../Interfaces/bin/Bin';
import UserTransformer from '../../user/Transformers/UserTransformer';
import ProductVariantTransformer from '../../product/Transformers/ProductVariantTransformer';
import ReturnOrderLineTransformer from '../../return/Transformers/ReturnOrderLineTransformer';
import BaseTransformer from '../../../BaseTransformer';
import BinTransformer from '../../bin/Transformers/BinTransformer';

export default class StockTransformer extends BaseTransformer {
    /**
     * Map an stock response
     *
     * @param stock
     */
    mapData(stock: StockInterface): Stock {
        return new Stock({
            id: stock.id,
            createdAt: stock.createdAt,
            updatedAt: stock.updatedAt,
            statusId: stock.statusId,
            // belongs to
            productVariant: this.includeProductVariant(stock),
            user: this.includeUser(stock),
            bin: this.includeBin(stock),
            // has many
            returnOrderLines: this.includeReturnOrderLines(stock),
        });
    }

    includeProductVariant(stock: StockInterface): ProductVariantInterface | null {
        return this.item(stock, 'productVariant', new ProductVariantTransformer());
    }
    includeUser(stock: StockInterface): UserInterface | null {
        return this.item(stock, 'user', new UserTransformer());
    }
    includeBin(stock: StockInterface): BinInterface | null | {} {
        return this.item(stock, 'bin', new BinTransformer());
    }
    includeReturnOrderLines(stock: StockInterface): ReturnOrderLineInterface[] {
        return this.collection(stock, 'returnOrderLines', new ReturnOrderLineTransformer());
    }
}
