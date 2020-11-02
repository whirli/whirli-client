import Client from '../../Client';
import WACCOrders from './Orders/Orders';
import WACCReturnOrders from './ReturnOrders/ReturnOrders';
import WACCSearch from './Search/Search';
import WACCUsers from './Users/Users';
import WACCUserSubscriptions from './UserSubscriptions/UserSubscriptions';
import WACCGifts from './Gifts/Gifts';
import WACCProducts from './Products/Products';
import WACCStock from './Stock/Toybox';
import WACCProductAssociations from './ProductAssociations/ProductAssociations';
import WACCAssets from './Assets/Assets';
import WACCReturnOrderLines from './ReturnOrderLines/ReturnOrderLines';
export interface WaccResources {
    orders: WACCOrders;
    returnOrders: WACCReturnOrders;
    returnOrderLines: WACCReturnOrderLines;
    search: WACCSearch;
    users: WACCUsers;
    userSubscriptions: WACCUserSubscriptions;
    gifts: WACCGifts;
    products: WACCProducts;
    productAssociations: WACCProductAssociations;
    assets: WACCAssets;
    stock: WACCStock;
}
export declare function loadWaccResources(client: Client): WaccResources;
