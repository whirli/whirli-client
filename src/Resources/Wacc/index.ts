import Client from '../../Client';
import WACCOrders from './Orders/Orders';
import WACCReturnOrders from './ReturnOrders/ReturnOrders';
import WACCSearch from './Search/Search';
import WACCUsers from './Users/Users';

export interface WaccResources {
    orders: WACCOrders;
    returnOrders: WACCReturnOrders;
    search: WACCSearch;
    users: WACCUsers;
}

export function loadWaccResources(client: Client): WaccResources {
    return {
        orders: new WACCOrders(client),
        returnOrders: new WACCReturnOrders(client),
        search: new WACCSearch(client),
        users: new WACCUsers(client),
    };
}
