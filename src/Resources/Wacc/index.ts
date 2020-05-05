import Client from '../../Client';
import WACCOrders from './Orders/Orders';
import WACCReturnOrders from './ReturnOrders/ReturnOrders';
import WACCSearch from './Search/Search';
import WACCUsers from './Users/Users';
import WACCGifts from './Gifts/Gifts';
import WACCProducts from './Products/Products';

export interface WaccResources {
    orders: WACCOrders;
    returnOrders: WACCReturnOrders;
    search: WACCSearch;
    users: WACCUsers;
    gifts: WACCGifts;
    products: WACCProducts;
}

export function loadWaccResources(client: Client): WaccResources {
    return {
        orders: new WACCOrders(client),
        returnOrders: new WACCReturnOrders(client),
        search: new WACCSearch(client),
        users: new WACCUsers(client),
        gifts: new WACCGifts(client),
        products: new WACCProducts(client),
    };
}
