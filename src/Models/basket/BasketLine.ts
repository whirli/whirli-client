import { BasketLine as BasketLineInterface } from '../../Interfaces/basket/BasketLine';

export default class BasketLine {
    constructor(parameters: BasketLineInterface) {
        Object.assign(this, parameters);
    }
}
