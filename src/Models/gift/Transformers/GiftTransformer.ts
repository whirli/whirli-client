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
            updatedAt: gift.updatedAt,
            placedAt: gift.placedAt,
            packedAt: gift.packedAt,
            dispatchedAt: gift.dispatchedAt,
            completedAt: gift.completedAt,
            deletedAt: gift.deletedAt,
            redeemedAt: gift.redeemedAt,
            expectedDeliveryDate: gift.expectedDeliveryDate,
            code: gift.code,
            value: gift.value,
            message: gift.message,
            giftStatusId: gift.giftStatusId,
            guest: gift.guest,
            allowEmailDiscountOffers: gift.allowEmailDiscountOffers,
            withBasket: gift.withBasket,
            toGiftRecipient: gift.toGiftRecipient,
            stripeCustomerId: gift.stripeCustomerId,
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
            resourceType: gift.resourceType,
            // relations
            giftBasket: this.includeGiftBasket(gift),
            order: this.includeOrder(gift),
            user: this.includeUser(gift),
            redeemedBy: this.includeUser(gift),
            // accessors
            statusId: gift.statusId,
            deliveryMethod: gift.deliveryMethod,
            hasReusablePackagingOptIn: gift.hasReusablePackagingOptIn,
            hasToys: gift.hasToys,
            shippingFee: gift.shippingFee,
            checkout: gift.checkout,
            // @todo are these used
            shippingMethod: gift.shippingMethod,
            shippingPreference: gift.shippingPreference,
            notes: gift.notes,
            currency: gift.currency,
            contactEmail: gift.contactEmail,
            contactPhone: gift.contactPhone,
            meta: gift.meta,
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
