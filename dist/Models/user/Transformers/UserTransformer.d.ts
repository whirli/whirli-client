import User from '../User';
import UserInterface from '../../../Interfaces/user/User';
import OrderInterface from '../../../Interfaces/order/Order';
import BaseTransformer from '../../../BaseTransformer';
import StockInterface from '../../../Interfaces/stock/Stock';
import AddressInterface from '../../../Interfaces/address/Address';
import PurchaseStockInterface from '../../../Interfaces/stock/PurchaseStock';
import ProductListInterface from '../../../Interfaces/product/ProductList';
import ReturnOrderInterface from '../../../Interfaces/return/ReturnOrder';
import { Basket as BasketInterface } from '../../../Interfaces/basket/Basket';
import UserSubscriptionInterface from '../../../Interfaces/user/UserSubscription';
import RoleInterface from '../../../Interfaces/role/Role';
import WaitSpotInterface from '../../../Interfaces/waitspot/WaitSpot';
export default class UserTransformer extends BaseTransformer {
    mapData(user: UserInterface): User;
    includeOrders(user: UserInterface): Array<OrderInterface>;
    includeStock(user: UserInterface): Array<StockInterface>;
    includeAddresses(user: UserInterface): Array<AddressInterface>;
    includeToybox(user: UserInterface): Array<PurchaseStockInterface>;
    includeLists(user: UserInterface): Array<ProductListInterface>;
    includeWaitSpots(user: UserInterface): Array<WaitSpotInterface>;
    includeReturnOrders(user: UserInterface): Array<ReturnOrderInterface>;
    includeActiveReturnOrder(user: UserInterface): ReturnOrderInterface | null;
    includeRoles(user: UserInterface): Array<RoleInterface>;
    includeBasket(user: UserInterface): Array<BasketInterface>;
    includeUserSubscriptions(user: UserInterface): Array<UserSubscriptionInterface>;
}
