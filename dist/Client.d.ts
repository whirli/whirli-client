import ApiOptions from './Interfaces/ApiOptions';
import HttpClient from './Interfaces/HttpClient';
import Search from './Resources/wacc/Search/search';
import ReturnOrders from './Resources/wacc/Returns/returnOrders';
import Products from './Resources/Products/products';
import Users from './Resources/Users/users';
import Orders from './Resources/Orders/orders';
import Subscriptions from './Resources/Subscriptions/subscriptions';
import { WACC } from './Resources/wacc';
export default class Client {
    orders: Orders;
    products: Products;
    returnOrders: ReturnOrders;
    search: Search;
    users: Users;
    subscriptions: Subscriptions;
    wacc: WACC;
    protected apiOptions: ApiOptions;
    protected httpClient: HttpClient;
    constructor(httpClient: HttpClient);
    getHttpClient(): HttpClient;
    loadResources(): void;
    getBasePath(): string;
    setDebug(flag: boolean): void;
}
