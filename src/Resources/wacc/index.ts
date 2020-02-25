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

export default (client: Client): WACC => ({
    auth: new WACCAuth(client),
    orders: new WACCOrders(client),
    products: new WACCProducts(client),
    returnOrders: new WACCReturnOrders(client),
    search: new WACCSearch(client),
    users: new WACCUsers(client),
});
