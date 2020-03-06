import ApiOptions from './Interfaces/ApiOptions';
import HttpClient from './Interfaces/HttpClient';
import resources from './Resources';
import Auth from './Resources/Auth/auth';
import Search from './Resources/Search/search';
import ReturnOrders from './Resources/Returns/returnOrders';
import Users from './Resources/Users/users';
import Orders from './Resources/Orders/orders';
import OrderLines from './Resources/Orders/orderLines';

export default class Client {
    public search!: Search;
    public auth!: Auth;
    public returnOrders!: ReturnOrders;
    public users!: Users;
    public orders!: Orders;
    public orderLines!: OrderLines;

    protected apiOptions: ApiOptions;
    protected httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.apiOptions = {
            apiVersion: 'v1',
            baseUrl: '/api',
            debug: false,
            version: '0.0.1',
        };
        this.httpClient = httpClient;
        this.loadResources();
    }

    getHttpClient(): HttpClient {
        return this.httpClient;
    }

    loadResources(): void {
        this.search = new resources.Search(this);
        this.auth = new resources.Auth(this);
        this.returnOrders = new resources.ReturnOrders(this);
        this.users = new resources.Users(this);
        this.orders = new resources.Orders(this);
    }

    getBasePath(): string {
        return `${this.apiOptions.baseUrl}/${this.apiOptions.apiVersion}`;
    }

    setDebug(flag: boolean): void {
        this.apiOptions.debug = flag;
    }
}
