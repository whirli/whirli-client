import Basket from '../Basket';
import BasketLine from '../BasketLine';
import { Basket as BasketInterface } from '../../../Interfaces/basket/Basket';
import BaseTransformer from '../../../BaseTransformer';
export default class BasketTransformer extends BaseTransformer {
    mapData(basket: BasketInterface): Basket;
    includeBasketLines(basket: BasketInterface): Array<BasketLine>;
}
