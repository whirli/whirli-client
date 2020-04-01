import BasketLine from '../BasketLine';
import ProductVariant from '../../product/ProductVariant';
import { APIBasketLine as APIBasketLineInterface } from '../../../Interfaces/basket/BasketLine';
import BaseTransformer from '../../../BaseTransformer';
export default class BasketLineTransformer extends BaseTransformer {
    mapData(basketLine: APIBasketLineInterface): BasketLine;
    includeProductVariant(basketLine: APIBasketLineInterface): ProductVariant;
}
