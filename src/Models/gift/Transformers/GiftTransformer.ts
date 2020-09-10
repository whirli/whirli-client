import Gift from '../Gift';
import GiftInterface from '../../../Interfaces/gift/Gift';
import OrderInterface from '../../../Interfaces/order/Order';
import OrderTransformer from '../../order/Transformers/OrderTransformer';
import UserInterface from '../../../Interfaces/user/User';
import UserTransformer from '../../user/Transformers/UserTransformer';
import BasketTransformer from '../../basket/Transformers/BasketTransformer';
import BaseTransformer from '../../../BaseTransformer';
import GiftBasketInterface from '../../../Interfaces/gift/GiftBasket';

export default class GiftTransformer extends BaseTransformer {
    /**
     * Map an gift response
     *
     * @param gift
     */
    mapData(gift: GiftInterface): Gift {
        return new Gift({
            id: gift.id,
            createdAt: gift.createdAt,
            completedAt: gift.completedAt,
            deletedAt: gift.deletedAt,
            updatedAt: gift.updatedAt,
            statusId: gift.statusId,
            hasToys: gift.hasToys,
            shippingMethod: gift.shippingMethod,
            shippingPreference: gift.shippingPreference,
            notes: gift.notes,
            currency: gift.currency,
            billingPhone: gift.billingPhone,
            billingEmail: gift.billingEmail,
            billingFirstname: gift.billingFirstname,
            billingLastname: gift.billingLastname,
            billingAddress: gift.billingAddress,
            billingAddressTwo: gift.billingAddressTwo,
            billingAddressThree: gift.billingAddressThree,
            billingCity: gift.billingCity,
            billingCounty: gift.billingCounty,
            billingState: gift.billingState,
            billingCountry: gift.billingCountry,
            billingZip: gift.billingZip,
            shippingPhone: gift.shippingPhone,
            shippingEmail: gift.shippingEmail,
            shippingFirstname: gift.shippingFirstname,
            shippingLastname: gift.shippingLastname,
            shippingAddress: gift.shippingAddress,
            shippingAddressTwo: gift.shippingAddressTwo,
            shippingCity: gift.shippingCity,
            shippingCounty: gift.shippingCounty,
            shippingState: gift.shippingState,
            shippingCountry: gift.shippingCountry,
            shippingZip: gift.shippingZip,
            contactEmail: gift.contactEmail,
            contactPhone: gift.contactPhone,
            dispatchedAt: gift.dispatchedAt,
            redeemedAt: gift.redeemedAt,
            packedAt: gift.packedAt,
            placedAt: gift.placedAt,
            meta: gift.meta,
            message: gift.message,
            resourceType: gift.resourceType,
            value: gift.value,
            allowEmailDiscountOffers: gift.allowEmailDiscountOffers,
            toGiftRecipient: gift.toGiftRecipient,
            stripeCustomerId: gift.stripeCustomerId,
            withBasket: gift.withBasket,
            guest: gift.guest,
            deliveryMethod: gift.deliveryMethod,
            expectedDeliveryDate: gift.expectedDeliveryDate,
            // belongs to
            giftBasket: this.includeGiftBasket(gift),
            order: this.includeOrder(gift),
            user: this.includeUser(gift),
            redeemedBy: this.includeUser(gift),
            // accessors
            giftStatusId: gift.giftStatusId,
        });
    }

    includeUser(gift: GiftInterface): UserInterface | null {
        return this.item(gift, 'user', new UserTransformer());
    }

    includeOrder(gift: GiftInterface): OrderInterface | null {
        return this.item(gift, 'order', new OrderTransformer());
    }

    includeGiftBasket(gift: GiftInterface): GiftBasketInterface | null {
        return this.item(gift, 'giftBasket', new BasketTransformer());
    }
}
