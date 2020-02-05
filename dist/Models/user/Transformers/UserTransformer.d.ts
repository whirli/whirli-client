import User from '../User';
import UserInterface from '../../../Interfaces/user/User';
import OrderInterface from '../../../Interfaces/order/Order';
import BaseTransformer from '../../../BaseTransformer';
export default class UserTransformer extends BaseTransformer {
    mapData(user: UserInterface): User;
    includeOrdersCollection(user: UserInterface[]): OrderInterface[];
}
