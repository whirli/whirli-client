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
import ShippingManifestInterface from '../../../Interfaces/delivery/ShippingManifestInterface';
import ShippingManifestTransformer from '../../delivery/Transformers/ShippingManifestTransformer';
import GiftInterface from '../../../Interfaces/gift/Gift';
import GiftTransformer from '../../gift/Transformers/GiftTransformer';

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
            pickingAt: order.pickingAt,
            pickedAt: order.pickedAt,
            packingAt: order.packingAt,
            packedAt: order.packedAt,
            placedAt: order.placedAt,
            onHoldPickingAt: order.onHoldPickingAt,
            onHoldPackingAt: order.onHoldPackingAt,
            dispatchedAt: order.dispatchedAt,
            completedAt: order.completedAt,
            deletedAt: order.deletedAt,
            shippingMethod: order.shippingMethod,
            shippingPreference: order.shippingPreference,
            notes: order.notes,
            currency: order.currency,
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
            trackingNo: order.trackingNo,
            reference: order.reference,
            meta: order.meta,
            expectedDeliveryDate: order.expectedDeliveryDate,
            dispatchBy: order.dispatchBy,
            resourceType: order.resourceType,
            // relations
            basket: this.includeBasket(order),
            user: this.includeUser(order),
            assignee: this.includeAssignee(order),
            lines: this.includeOrderLines(order),
            shippingManifest: this.includeShippingManifest(order),
            gift: this.includeGift(order),
            // accessors
            isGift: order.isGift,
            statusId: order.statusId,
            deliveryMethod: order.deliveryMethod,
            hasReusablePackagingOptIn: order.hasReusablePackagingOptIn,
            tokensTotal: order.tokensTotal,
            onFirstOrder: order.onFirstOrder,
            isFirstOrder: order.isFirstOrder,
            weight: order.weight,
            isPastDueDispatch: order.isPastDueDispatch,
            isPastDueDelivery: order.isPastDueDelivery,
            shippingReference: order.shippingReference,
            shippingValue: order.shippingValue,
            shippingWeight: order.shippingWeight,
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

    includeShippingManifest(order: OrderInterface): ShippingManifestInterface | null {
        return this.item(order, 'shippingManifest', new ShippingManifestTransformer());
    }

    includeGift(order: OrderInterface): GiftInterface | null {
        return this.item(order, 'gift', new GiftTransformer());
    }
}
