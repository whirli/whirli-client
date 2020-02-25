import ApiOptions from './Interfaces/ApiOptions';
import HttpClient from './Interfaces/HttpClient';
import Auth from './Resources/Auth/auth';
import Orders from './Resources/Orders/orders';
import Products from './Resources/Products/products';
import ReturnOrders from './Resources/Returns/returnOrders';
import Search from './Resources/Search/search';
import Users from './Resources/Users/users';
export default class Client {
    auth: Auth;
    orders: Orders;
    products: Products;
    returnOrders: ReturnOrders;
    search: Search;
    users: Users;
    protected apiOptions: ApiOptions;
    protected httpClient: HttpClient;
    constructor(httpClient: HttpClient);
    getHttpClient(): HttpClient;
    loadResources(): void;
    getBasePath(): string;
    setDebug(flag: boolean): void;
}
