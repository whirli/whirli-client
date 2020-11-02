import Assignee from '../Assignee';
import AssigneeInterface from '../../../Interfaces/order/Assignee';
import BaseTransformer from '../../../BaseTransformer';

export default class AssigneeTransformer extends BaseTransformer {
    /**
     * Map an order response
     *
     * @param assignee
     */
    mapData(assignee: AssigneeInterface): Assignee {
        return new Assignee({
            id: assignee.id,
            createdAt: assignee.createdAt,
            updatedAt: assignee.updatedAt,
            firstname: assignee.firstname,
            lastname: assignee.lastname,
            email: assignee.email,
            reference: assignee.reference,
            resourceType: assignee.resourceType,
            color: assignee.color,
        });
    }
}
