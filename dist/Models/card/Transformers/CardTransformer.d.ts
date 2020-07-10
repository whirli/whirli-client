import Card from '../Card';
import CardInterface from '../../../Interfaces/card/Card';
import BaseTransformer from '../../../BaseTransformer';
export default class CardTransformer extends BaseTransformer {
    mapData(card: CardInterface): Card;
}
