import ApiOptions from './Interfaces/ApiOptions';
import HttpClient from './Interfaces/HttpClient';
import resources from './Resources';
import Search from './Resources/wacc/Search/search';
import ReturnOrders from './Resources/wacc/Returns/returnOrders';
import Products from './Resources/Products/products';
import Users from './Resources/Users/users';
import Orders from './Resources/Orders/orders';
import Subscriptions from './Resources/Subscriptions/subscriptions';
import wacc, { WACC } from './Resources/wacc';

export default class Client {
    public orders!: Orders;
    public products!: Products;
    public returnOrders!: ReturnOrders;
    public search!: Search;
    public users!: Users;
    public subscriptions!: Subscriptions;
    public wacc!: WACC;

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
        this.orders = new resources.Orders(this);
        this.products = new resources.Products(this);
        this.returnOrders = new resources.ReturnOrders(this);
        this.search = new resources.Search(this);
        this.subscriptions = new resources.Subscriptions(this);
        this.users = new resources.Users(this);
        this.wacc = wacc(this);
    }

    getBasePath(): string {
        return `${this.apiOptions.baseUrl}/${this.apiOptions.apiVersion}`;
    }

    setDebug(flag: boolean): void {
        this.apiOptions.debug = flag;
    }
}
