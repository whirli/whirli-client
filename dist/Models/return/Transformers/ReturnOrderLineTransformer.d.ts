import ReturnOrderLine from '../ReturnOrderLine';
import ReturnOrderLineInterface from '../../../Interfaces/return/ReturnOrderLine';
import StockInterface from '../../../Interfaces/stock/Stock';
import ReturnOrderInterface from '../../../Interfaces/return/ReturnOrder';
import BaseTransformer from '../../../BaseTransformer';
export default class ReturnOrderLineTransformer extends BaseTransformer {
    mapData(returnOrderLine: ReturnOrderLineInterface): ReturnOrderLine;
    includeReturnOrder(returnOrderLine: ReturnOrderLineInterface): ReturnOrderInterface | null;
    includeStock(returnOrderLine: ReturnOrderLineInterface): StockInterface | null;
}
