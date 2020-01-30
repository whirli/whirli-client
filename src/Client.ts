import ApiOptions from './Interfaces/ApiOptions';
import HttpClient from './Interfaces/HttpClient';
import resources from './Resources';
import Auth from './Resources/Auth/auth';
import Search from './Resources/Search/Search';
import ReturnOrders from './Resources/Returns/returnOrders';
import Users from './Resources/Users/users';

export default class Client {
    public search!: Search;
    public auth!: Auth;
    public returnOrders!: ReturnOrders;
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
        this.search = new resources.Search(this);
        this.auth = new resources.Auth(this);
        this.returnOrders = new resources.ReturnOrders(this);
        this.users = new resources.Users(this);
    }

    getBasePath(): string {
        return `${this.apiOptions.baseUrl}/${this.apiOptions.apiVersion}`;
    }

    setDebug(flag: boolean): void {
        this.apiOptions.debug = flag;
    }
}
