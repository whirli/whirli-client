import BaseTransformer from '../../../BaseTransformer';
import GiftBasketInterface from '../../../Interfaces/gift/GiftBasket';
import GiftBasket from '../GiftBasket';
import UserInterface from '../../../Interfaces/user/User';
import UserTransformer from '../../user/Transformers/UserTransformer';
import GiftInterface from '../../../Interfaces/gift/Gift';
import GiftTransformer from './GiftTransformer';

export default class GiftBasketTransformer extends BaseTransformer {
    mapData(giftBasket: GiftBasketInterface): GiftBasket {
        return new GiftBasket({
            id: giftBasket.id,
            createdAt: giftBasket.createdAt,
            updatedAt: giftBasket.updatedAt,
            basket: giftBasket.basket,
            user: this.includeUser(giftBasket) || undefined,
            gift: this.includeGift(giftBasket) || undefined,
        });
    }

    includeUser(giftBasket: GiftBasketInterface): UserInterface | null {
        return this.item(giftBasket, 'user', new UserTransformer());
    }

    includeGift(giftBasket: GiftBasketInterface): GiftInterface | null {
        return this.item(giftBasket, 'gift', new GiftTransformer());
    }
}
