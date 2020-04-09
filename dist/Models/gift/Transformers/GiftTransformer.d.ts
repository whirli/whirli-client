import Gift from '../Gift';
import GiftInterface from '../../../Interfaces/gift/Gift';
import OrderInterface from '../../../Interfaces/order/Order';
import UserInterface from '../../../Interfaces/user/User';
import { Basket as BasketInterface } from '../../../Interfaces/basket/Basket';
import BaseTransformer from '../../../BaseTransformer';
export default class GiftTransformer extends BaseTransformer {
    mapData(gift: GiftInterface): Gift;
    includeUser(gift: GiftInterface): UserInterface | null;
    includeOrder(gift: GiftInterface): OrderInterface | null;
    includeGiftBasket(gift: GiftInterface): BasketInterface | null;
}
