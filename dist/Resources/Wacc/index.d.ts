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
export declare function loadWaccResources(client: Client): WaccResources;
