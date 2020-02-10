import OrderLine from '../OrderLine';
import OrderLineInterface from '../../../Interfaces/order/OrderLine';
import OrderInterface from '../../../Interfaces/order/Order';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import BaseTransformer from '../../../BaseTransformer';
export default class OrderLineTransformer extends BaseTransformer {
    mapData(orderLine: OrderLineInterface): OrderLine;
    includeOrder(orderLine: OrderLineInterface): OrderInterface | null;
    includeProductVariant(orderLine: OrderLineInterface): ProductVariantInterface | null;
}
