import GiftBasketInterface from '../../Interfaces/gift/GiftBasket';

export default class GiftBasket {
    constructor(parameters: GiftBasketInterface) {
        Object.assign(this, parameters);
    }
}
