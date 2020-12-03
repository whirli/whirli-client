import Basket from '../Basket';
import BasketLine from '../BasketLine';
import { Basket as BasketInterface } from '../../../Interfaces/basket/Basket';
import BasketLineTransformer from './BasketLineTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class BasketTransformer extends BaseTransformer {
    /**
     * Map basket response
     *
     * @param basket
     */
    mapData(basket: BasketInterface): Basket {
        return new Basket({
            id: basket.id,
            totalTokens: basket.totalTokens,
            createdAt: basket.createdAt,
            updatedAt: basket.updatedAt,
            basketLines: this.includeBasketLines(basket),
        });
    }
    includeBasketLines(basket: BasketInterface): Array<BasketLine> {
        return this.collection(basket, 'basket_lines', new BasketLineTransformer());
    }
}
