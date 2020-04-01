import Basket from '../Basket';
import BasketLine from '../BasketLine';
import { APIBasket as APIBasketInterface } from '../../../Interfaces/basket/Basket';
import BasketLineTransformer from './BasketLineTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class BasketTransformer extends BaseTransformer {
    /**
     * Map basket response
     *
     * @param basket
     */
    mapData(basket: APIBasketInterface): Basket {
        return new Basket({
            id: basket.id,
            tokensTotal: basket.tokens_total,
            createdAt: basket.created_at,
            updatedAt: basket.updated_at,
            basketLines: this.includeBasketLines(basket),
        });
    }
    includeBasketLines(basket: APIBasketInterface): Array<BasketLine> {
        return this.collection(basket, 'basket_lines', new BasketLineTransformer());
    }
}
