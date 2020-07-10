import CardInterface from '../../Interfaces/card/Card';

export default class Card {
    constructor(parameters: CardInterface) {
        Object.assign(this, parameters);
    }
}
