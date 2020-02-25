import ApiOptions from './Interfaces/ApiOptions';
import HttpClient from './Interfaces/HttpClient';
import Auth from './Resources/wacc/Auth/auth';
import Search from './Resources/wacc/Search/search';
import ReturnOrders from './Resources/wacc/Returns/returnOrders';
import Products from './Resources/Products/products';
import Users from './Resources/Users/users';
import Orders from './Resources/wacc/Orders/orders';
import WACCAuth from './Resources/wacc/Auth/auth';
import WACCSearch from './Resources/wacc/Search/search';
import WACCReturnOrders from './Resources/wacc/Returns/returnOrders';
import WACCUsers from './Resources/wacc/Users/users';
import WACCOrders from './Resources/wacc/Orders/orders';
interface WACC {
    users: WACCUsers;
    auth: WACCAuth;
    orders: WACCOrders;
    returnOrders: WACCReturnOrders;
    search: WACCSearch;
}
export default class Client {
    auth: Auth;
    orders: Orders;
    products: Products;
    returnOrders: ReturnOrders;
    search: Search;
    users: Users;
    wacc: WACC;
    protected apiOptions: ApiOptions;
    protected httpClient: HttpClient;
    constructor(httpClient: HttpClient);
    getHttpClient(): HttpClient;
    loadResources(): void;
    getBasePath(): string;
    setDebug(flag: boolean): void;
}
export {};
