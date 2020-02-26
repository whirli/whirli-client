import ReturnOrderLine from '../ReturnOrderLine';
import ReturnOrderLineInterface from '../../../Interfaces/return/ReturnOrderLine';
import StockInterface from '../../../Interfaces/stock/Stock';
import ReturnOrderInterface from '../../../Interfaces/return/ReturnOrder';
import UserTransformer from '../../user/Transformers/UserTransformer';
import StockTransformer from '../../stock/Transformers/StockTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class ReturnOrderLineTransformer extends BaseTransformer {
    /**
     * Map an returnOrderLine response
     *
     * @param returnOrderLine
     */
    mapData(returnOrderLine: ReturnOrderLineInterface): ReturnOrderLine {
        return new ReturnOrderLine({
            id: returnOrderLine.id,
            createdAt: returnOrderLine.createdAt,
            updatedAt: returnOrderLine.updatedAt,
            statusId: returnOrderLine.statusId,
            isManual: returnOrderLine.isManual,
            isDamaged: returnOrderLine.isDamaged,
            meta: returnOrderLine.meta,
            // belongs to
            rtrn: this.includeReturnOrder(returnOrderLine),
            stock: this.includeStock(returnOrderLine),
        });
    }

    includeReturnOrder(returnOrderLine: ReturnOrderLineInterface): ReturnOrderInterface | null {
        return this.item(returnOrderLine, 'rtrn', new UserTransformer());
    }

    includeStock(returnOrderLine: ReturnOrderLineInterface): StockInterface | null {
        return this.item(returnOrderLine, 'stock', new StockTransformer());
    }
}
