import BaseTransformer from '../../../BaseTransformer';
import GiftBasketInterface from '../../../Interfaces/gift/GiftBasket';
import GiftBasket from '../GiftBasket';
import UserInterface from '../../../Interfaces/user/User';
import GiftInterface from '../../../Interfaces/gift/Gift';
export default class GiftBasketTransformer extends BaseTransformer {
    mapData(giftBasket: GiftBasketInterface): GiftBasket;
    includeUser(giftBasket: GiftBasketInterface): UserInterface | null;
    includeGift(giftBasket: GiftBasketInterface): GiftInterface | null;
}
