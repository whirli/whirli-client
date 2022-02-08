import ReturnOrder from '../ReturnOrder';
import ReturnOrderInterface from '../../../Interfaces/return/ReturnOrder';
import ReturnOrderLineInterface from '../../../Interfaces/return/ReturnOrderLine';
import UserInterface from '../../../Interfaces/user/User';
import UserTransformer from '../../user/Transformers/UserTransformer';
import ReturnOrderLineTransformer from '../../return/Transformers/ReturnOrderLineTransformer';
import BaseTransformer from '../../../BaseTransformer';
import ShippingAddonInterface from '../../../Interfaces/delivery/ShippingAddon';
import ShippingAddonTransformer from '../../delivery/Transformers/ShippingAddonTransformer';

export default class ReturnOrderTransformer extends BaseTransformer {
    /**
     * Map an returnOrder response
     *
     * @param returnOrder
     */
    mapData(returnOrder: ReturnOrderInterface): ReturnOrder {
        return new ReturnOrder({
            id: returnOrder.id,
            createdAt: returnOrder.createdAt,
            updatedAt: returnOrder.updatedAt,
            statusId: returnOrder.statusId,
            subTotal: returnOrder.subTotal,
            deliveryTotal: returnOrder.deliveryTotal,
            discountTotal: returnOrder.discountTotal,
            taxTotal: returnOrder.taxTotal,
            orderTotal: returnOrder.orderTotal,
            shippingMethod: returnOrder.shippingMethod,
            shippingPreference: returnOrder.shippingPreference,
            currency: returnOrder.currency,
            vatNo: returnOrder.vatNo,
            reference: returnOrder.reference,
            contactEmail: returnOrder.contactEmail,
            contactPhone: returnOrder.contactPhone,
            trackingNumber: returnOrder.trackingNumber,
            conversion: returnOrder.conversion,
            meta: returnOrder.meta,
            notes: returnOrder.notes,
            placedAt: returnOrder.placedAt,
            dispatchedAt: returnOrder.dispatchedAt,
            receivedAt: returnOrder.receivedAt,
            processedAt: returnOrder.processedAt,
            resourceType: returnOrder.resourceType,
            // belongs to
            user: this.includeUser(returnOrder),
            // belongs to many
            shippingAddons: this.includeShippingAddons(returnOrder),
            // has many
            returnOrderLines: this.includeOrderLines(returnOrder),
        });
    }

    includeUser(returnOrder: ReturnOrderInterface): UserInterface | null {
        return this.item(returnOrder, 'user', new UserTransformer());
    }

    includeOrderLines(returnOrder: ReturnOrderInterface): ReturnOrderLineInterface[] {
        return this.collection(returnOrder, 'returnOrderLines', new ReturnOrderLineTransformer());
    }

    includeShippingAddons(returnOrder: ReturnOrderInterface): ShippingAddonInterface[] {
        return this.collection(returnOrder, 'shippingAddons', new ShippingAddonTransformer());
    }
}
