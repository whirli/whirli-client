import Order from '../Order';
import OrderInterface from '../../../Interfaces/order/Order';
import OrderLineInterface from '../../../Interfaces/order/OrderLine';
import UserInterface from '../../../Interfaces/user/User';
import UserTransformer from '../../user/Transformers/UserTransformer';
import OrderLineTransformer from '../../order/Transformers/OrderLineTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class OrderTransformer extends BaseTransformer {
    /**
     * Map an order response
     *
     * @param order
     */
    mapData(order: OrderInterface): Order {
        return new Order({
            id: order.id,
            createdAt: order.createdAt,
            updatedAt: order.updatedAt,
            shippingMethod: order.shippingMethod,
            shippingPreference: order.shippingPreference,
            reference: order.reference,
            trackingNo: order.trackingNo,
            dispatchedAt: order.dispatchedAt,
            currency: order.currency,
            orderStatus: order.orderStatus,
            placedAt: order.placedAt,
            notes: order.notes,
            billingPhone: order.billingPhone,
            billingEmail: order.billingEmail,
            billingFirstname: order.billingFirstname,
            billingLastname: order.billingLastname,
            billingAddress: order.billingAddress,
            billingAddressTwo: order.billingAddressTwo,
            billingAddressThree: order.billingAddressThree,
            billingCity: order.billingCity,
            billingCounty: order.billingCounty,
            billingState: order.billingState,
            billingCountry: order.billingCountry,
            billingZip: order.billingZip,
            shippingPhone: order.shippingPhone,
            shippingEmail: order.shippingEmail,
            shippingFirstname: order.shippingFirstname,
            shippingLastname: order.shippingLastname,
            shippingAddress: order.shippingAddress,
            shippingAddressTwo: order.shippingAddressTwo,
            shippingAddressThree: order.shippingAddressThree,
            shippingCity: order.shippingCity,
            shippingCounty: order.shippingCounty,
            shippingState: order.shippingState,
            shippingCountry: order.shippingCountry,
            shippingZip: order.shippingZip,
            contactEmail: order.contactEmail,
            contactPhone: order.contactPhone,
            meta: order.meta,
            resourceType: order.resourceType,
            // belongs to
            user: this.includeUser(order),
            // has many
            lines: this.includeOrderLines(order.lines || []),
        });
    }

    includeUser(order: OrderInterface): UserInterface | null {
        return this.item(order, 'user', new UserTransformer());
    }

    includeOrderLines(order: OrderInterface[]): OrderLineInterface[] {
        return this.collection(order, 'lines', new OrderLineTransformer());
    }
}
