import OrderLineInterface from '../../Interfaces/order/OrderLine';

export default class OrderLine {
    constructor(parameters: OrderLineInterface) {
        Object.assign(this, parameters);
    }
}
