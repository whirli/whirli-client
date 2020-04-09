import GiftInterface from '../../Interfaces/order/Order';

export default class Gift {
    constructor(parameters: GiftInterface) {
        Object.assign(this, parameters);
    }
}
