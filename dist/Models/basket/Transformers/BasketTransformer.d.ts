import Basket from '../Basket';
import BasketLine from '../BasketLine';
import { APIBasket as APIBasketInterface } from '../../../Interfaces/basket/Basket';
import BaseTransformer from '../../../BaseTransformer';
export default class BasketTransformer extends BaseTransformer {
    mapData(basket: APIBasketInterface): Basket;
    includeBasketLines(basket: APIBasketInterface): Array<BasketLine>;
}
