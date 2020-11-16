import Order from '../Order';
import OrderInterface from '../../../Interfaces/order/Order';
import OrderLineInterface from '../../../Interfaces/order/OrderLine';
import UserInterface from '../../../Interfaces/user/User';
import AssigneeInterface from '../../../Interfaces/order/Assignee';
import { Basket as BasketInterface } from '../../../Interfaces/basket/Basket';
import UserTransformer from '../../user/Transformers/UserTransformer';
import OrderLineTransformer from '../../order/Transformers/OrderLineTransformer';
import BaseTransformer from '../../../BaseTransformer';
import AssigneeTransformer from './AssigneeTransformer';
import BasketTransformer from '../../basket/Transformers/BasketTransformer';

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
            statusId: order.statusId,
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
            onFirstOrder: order.onFirstOrder,
            isFirstOrder: order.isFirstOrder,
            deliveryMethod: order.deliveryMethod,
            expectedDeliveryDate: order.expectedDeliveryDate,
            hasReusablePackagingOptIn: order.hasReusablePackagingOptIn,
            weight: order.weight,
            shippingServiceId: order.shippingServiceId,
            // belongs to
            user: this.includeUser(order),
            basket: this.includeBasket(order),
            assignee: this.includeAssignee(order),
            // has many
            lines: this.includeOrderLines(order),
            // accessors
            isGift: order.isGift,
        });
    }

    includeUser(order: OrderInterface): UserInterface | null {
        return this.item(order, 'user', new UserTransformer());
    }

    includeOrderLines(order: OrderInterface): Array<OrderLineInterface> {
        return this.collection(order, 'lines', new OrderLineTransformer());
    }

    includeAssignee(order: OrderInterface): AssigneeInterface | null {
        return this.item(order, 'assignee', new AssigneeTransformer());
    }

    includeBasket(order: OrderInterface): BasketInterface | null {
        return this.item(order, 'basket', new BasketTransformer());
    }
}
