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
import WACCRoles from './Roles/Roles';
import WACCOrderLines from './OrderLines/OrderLines';
import WACCWaitSpots from './WaitSpots/WaitSpots';
import WACCReferral from './Referral/Referrals';

export interface WaccResources {
    orders: WACCOrders;
    orderLines: WACCOrderLines;
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
    roles: WACCRoles;
    waitSpots: WACCWaitSpots;
    referrals: WACCReferral;
}

export function loadWaccResources(client: Client): WaccResources {
    return {
        orders: new WACCOrders(client),
        orderLines: new WACCOrderLines(client),
        returnOrders: new WACCReturnOrders(client),
        returnOrderLines: new WACCReturnOrderLines(client),
        search: new WACCSearch(client),
        users: new WACCUsers(client),
        userSubscriptions: new WACCUserSubscriptions(client),
        gifts: new WACCGifts(client),
        products: new WACCProducts(client),
        productAssociations: new WACCProductAssociations(client),
        assets: new WACCAssets(client),
        stock: new WACCStock(client),
        roles: new WACCRoles(client),
        waitSpots: new WACCWaitSpots(client),
        referrals: new WACCReferral(client),
    };
}
