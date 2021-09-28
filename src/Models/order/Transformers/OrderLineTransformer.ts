import OrderLine from '../OrderLine';
import OrderLineInterface from '../../../Interfaces/order/OrderLine';
import OrderInterface from '../../../Interfaces/order/Order';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import StockInterface from '../../../Interfaces/stock/Stock';
import ProductVariantTransformer from '../../product/Transformers/ProductVariantTransformer';
import OrderTransformer from '../../order/Transformers/OrderTransformer';
import BaseTransformer from '../../../BaseTransformer';
import StockTransformer from '../../stock/Transformers/StockTransformer';

export default class OrderLineTransformer extends BaseTransformer {
    /**
     * Map an orderLine response
     *
     * @param orderLine
     */
    mapData(orderLine: OrderLineInterface): OrderLine {
        return new OrderLine({
            id: orderLine.id,
            createdAt: orderLine.createdAt,
            updatedAt: orderLine.updatedAt,
            isShipping: orderLine.isShipping,
            isManual: orderLine.isManual,
            quantity: orderLine.quantity,
            lineTotal: orderLine.lineTotal,
            unitPrice: orderLine.unitPrice,
            unitQty: orderLine.unitQty,
            discountTotal: orderLine.discountTotal,
            deliveryTotal: orderLine.deliveryTotal,
            taxTotal: orderLine.taxTotal,
            taxRate: orderLine.taxRate,
            sku: orderLine.sku,
            description: orderLine.description,
            option: orderLine.option,
            deletedAt: orderLine.deletedAt,
            meta: orderLine.meta,
            statusId: orderLine.statusId,
            message: orderLine.message,
            // belongs to
            order: this.includeOrder(orderLine),
            productVariant: this.includeProductVariant(orderLine),
            stock: this.includeStock(orderLine),
        });
    }

    includeOrder(orderLine: OrderLineInterface): OrderInterface | null {
        return this.item(orderLine, 'order', new OrderTransformer());
    }

    includeProductVariant(orderLine: OrderLineInterface): ProductVariantInterface | null {
        return this.item(orderLine, 'productVariant', new ProductVariantTransformer());
    }

    includeStock(orderLine: OrderLineInterface): Array<StockInterface> {
        return this.collection(orderLine, 'stock', new StockTransformer());
    }
}
