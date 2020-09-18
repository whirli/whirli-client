import Assignee from '../Assignee';
import AssigneeInterface from '../../../Interfaces/order/Assignee';
import BaseTransformer from '../../../BaseTransformer';
export default class AssigneeTransformer extends BaseTransformer {
    mapData(assignee: AssigneeInterface): Assignee;
}
