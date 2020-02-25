import WACCAuth from './Auth/auth';
import WACCSearch from './Search/search';
import WACCProducts from './Products/products';
import WACCReturnOrders from './Returns/returnOrders';
import WACCUsers from './Users/users';
import WACCOrders from './Orders/orders';
import Client from '../../Client';
export interface WACC {
    users: WACCUsers;
    auth: WACCAuth;
    products: WACCProducts;
    orders: WACCOrders;
    returnOrders: WACCReturnOrders;
    search: WACCSearch;
}
declare const _default: (client: Client) => WACC;
export default _default;
