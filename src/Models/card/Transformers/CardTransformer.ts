import Card from '../Card';
import CardInterface from '../../../Interfaces/card/Card';
import BaseTransformer from '../../../BaseTransformer';

export default class CardTransformer extends BaseTransformer {
    mapData(card: CardInterface): Card {
        return new Card({
            last4: card.last4,
            brand: card.brand,
            expMonth: card.expMonth,
            expYear: card.expYear,
        });
    }
}
