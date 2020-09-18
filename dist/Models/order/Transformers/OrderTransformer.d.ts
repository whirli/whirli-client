import Order from '../Order';
import OrderInterface from '../../../Interfaces/order/Order';
import OrderLineInterface from '../../../Interfaces/order/OrderLine';
import UserInterface from '../../../Interfaces/user/User';
import BaseTransformer from '../../../BaseTransformer';
import AssigneeInterface from '../../../Interfaces/order/Assignee';
export default class OrderTransformer extends BaseTransformer {
    mapData(order: OrderInterface): Order;
    includeUser(order: OrderInterface): UserInterface | null;
    includeOrderLines(order: OrderInterface): OrderLineInterface[];
    includeAssignee(order: OrderInterface): AssigneeInterface | null;
}
