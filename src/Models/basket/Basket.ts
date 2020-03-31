import { Basket as BasketInterface } from '../../Interfaces/basket/Basket';

export default class Basket {
    constructor(parameters: BasketInterface) {
        Object.assign(this, parameters);
    }
}
