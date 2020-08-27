import Client from '../../Client';
import WACCOrders from './Orders/Orders';
import WACCReturnOrders from './ReturnOrders/ReturnOrders';
import WACCSearch from './Search/Search';
import WACCUsers from './Users/Users';
import WACCUserSubscriptions from './UserSubscriptions/UserSubscriptions';
import WACCGifts from './Gifts/Gifts';
import WACCProducts from './Products/Products';
import WACCProductAssociations from './ProductAssociations/ProductAssociations';
import WACCAssets from './Assets/Assets';

export interface WaccResources {
    orders: WACCOrders;
    returnOrders: WACCReturnOrders;
    search: WACCSearch;
    users: WACCUsers;
    userSubscriptions: WACCUserSubscriptions;
    gifts: WACCGifts;
    products: WACCProducts;
    productAssociations: WACCProductAssociations;
    assets: WACCAssets;
}

export function loadWaccResources(client: Client): WaccResources {
    return {
        orders: new WACCOrders(client),
        returnOrders: new WACCReturnOrders(client),
        search: new WACCSearch(client),
        users: new WACCUsers(client),
        userSubscriptions: new WACCUserSubscriptions(client),
        gifts: new WACCGifts(client),
        products: new WACCProducts(client),
        productAssociations: new WACCProductAssociations(client),
        assets: new WACCAssets(client),
    };
}
