import ApiOptions from './Interfaces/ApiOptions';
import HttpClient from './Interfaces/HttpClient';
import Auth from './Resources/Auth/auth';
import Search from './Resources/Search/search';
import ReturnOrders from './Resources/Returns/returnOrders';
import Users from './Resources/Users/users';
import Orders from './Resources/Orders/orders';
import OrderLines from './Resources/Orders/orderLines';
export default class Client {
    search: Search;
    auth: Auth;
    returnOrders: ReturnOrders;
    users: Users;
    orders: Orders;
    orderLines: OrderLines;
    protected apiOptions: ApiOptions;
    protected httpClient: HttpClient;
    constructor(httpClient: HttpClient);
    getHttpClient(): HttpClient;
    loadResources(): void;
    getBasePath(): string;
    setDebug(flag: boolean): void;
}
