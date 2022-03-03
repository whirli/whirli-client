import Client from '../../Client';
import WACCCourier from './Couriers/Couriers';
import WACCOrders from './Orders/Orders';
import WACCReturnOrders from './ReturnOrders/ReturnOrders';
import WACCReturnOrderCollections from './ReturnOrders/ReturnOrderCollections';
import WACCSearch from './Search/Search';
import WACCUsers from './Users/Users';
import WACCUserSubscriptions from './UserSubscriptions/UserSubscriptions';
import WACCGifts from './Gifts/Gifts';
import WACCProducts from './Products/Products';
import WACCStock from './Stock/Stock';
import WACCProductAssociations from './ProductAssociations/ProductAssociations';
import WACCAssets from './Assets/Assets';
import WACCReturnOrderLines from './ReturnOrderLines/ReturnOrderLines';
import WACCRoles from './Roles/Roles';
import WACCOrderLines from './OrderLines/OrderLines';
import WACCWaitSpots from './WaitSpots/WaitSpots';
import WACCReferral from './Referral/Referrals';
import WACCCodes from './Codes/Codes';
import WaccShippingManifests from './Delivery/ShippingManifests';
export interface WaccResources {
    couriers: WACCCourier;
    orders: WACCOrders;
    orderLines: WACCOrderLines;
    returnOrders: WACCReturnOrders;
    returnOrderCollections: WACCReturnOrderCollections;
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
    codes: WACCCodes;
    shippingManifests: WaccShippingManifests;
}
export declare function loadWaccResources(client: Client): WaccResources;
