import ReturnOrderInterface from '../../Interfaces/return/ReturnOrder';

export default class ReturnOrder {
    constructor(parameters: ReturnOrderInterface) {
        Object.assign(this, parameters);
    }
}
