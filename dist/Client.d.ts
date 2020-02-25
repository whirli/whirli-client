import ApiOptions from './Interfaces/ApiOptions';
import HttpClient from './Interfaces/HttpClient';
import Auth from './Resources/Auth/auth';
import Search from './Resources/Search/search';
import ReturnOrders from './Resources/Returns/returnOrders';
import WACCUsers from './Resources/Users/wacc/users';
import Users from './Resources/Users/uwa/users';
import Orders from './Resources/Orders/orders';
export default class Client {
    search: Search;
    auth: Auth;
    returnOrders: ReturnOrders;
    users: Users;
    WACCUsers: WACCUsers;
    orders: Orders;
    protected apiOptions: ApiOptions;
    protected httpClient: HttpClient;
    constructor(httpClient: HttpClient);
    getHttpClient(): HttpClient;
    loadResources(): void;
    getBasePath(): string;
    setDebug(flag: boolean): void;
}
