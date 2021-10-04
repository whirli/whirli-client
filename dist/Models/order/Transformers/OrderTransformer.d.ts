import Order from '../Order';
import OrderInterface from '../../../Interfaces/order/Order';
import OrderLineInterface from '../../../Interfaces/order/OrderLine';
import UserInterface from '../../../Interfaces/user/User';
import AssigneeInterface from '../../../Interfaces/order/Assignee';
import { Basket as BasketInterface } from '../../../Interfaces/basket/Basket';
import BaseTransformer from '../../../BaseTransformer';
import ShippingManifestInterface from '../../../Interfaces/delivery/ShippingManifestInterface';
import GiftInterface from '../../../Interfaces/gift/Gift';
export default class OrderTransformer extends BaseTransformer {
    mapData(order: OrderInterface): Order;
    includeUser(order: OrderInterface): UserInterface | null;
    includeOrderLines(order: OrderInterface): Array<OrderLineInterface>;
    includeAssignee(order: OrderInterface): AssigneeInterface | null;
    includeBasket(order: OrderInterface): BasketInterface | null;
    includeShippingManifest(order: OrderInterface): ShippingManifestInterface | null;
    includeGift(order: OrderInterface): GiftInterface | null;
}
