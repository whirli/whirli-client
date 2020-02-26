import ReturnOrderLineInterface from '../../Interfaces/return/ReturnOrderLine';

export default class ReturnOrderLine {
    constructor(parameters: ReturnOrderLineInterface) {
        Object.assign(this, parameters);
    }
}
