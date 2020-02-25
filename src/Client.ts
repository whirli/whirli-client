import ApiOptions from './Interfaces/ApiOptions';
import HttpClient from './Interfaces/HttpClient';
import resources from './Resources';
import Auth from './Resources/Auth/auth';
import Orders from './Resources/Orders/orders';
import Products from './Resources/Products/products';
import ReturnOrders from './Resources/Returns/returnOrders';
import Search from './Resources/Search/search';
import Users from './Resources/Users/users';

export default class Client {
    public auth!: Auth;
    public orders!: Orders;
    public products!: Products;
    public returnOrders!: ReturnOrders;
    public search!: Search;
    public users!: Users;

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
        this.auth = new resources.Auth(this);
        this.orders = new resources.Orders(this);
        this.products = new resources.Products(this);
        this.returnOrders = new resources.ReturnOrders(this);
        this.search = new resources.Search(this);
        this.users = new resources.Users(this);
    }

    getBasePath(): string {
        return `${this.apiOptions.baseUrl}/${this.apiOptions.apiVersion}`;
    }

    setDebug(flag: boolean): void {
        this.apiOptions.debug = flag;
    }
}
