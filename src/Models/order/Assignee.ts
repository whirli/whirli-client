import AssigneeInterface from '../../Interfaces/order/Assignee';

export default class Assignee {
    constructor(parameters: AssigneeInterface) {
        Object.assign(this, parameters);
    }
}
