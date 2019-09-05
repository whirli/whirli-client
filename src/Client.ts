import ApiOptions from './Interfaces/ApiOptions';
import HttpClient from './Interfaces/HttpClient';
import resources from './Resources';
import AbstractResource from './Resources/AbstractResource';

export default class Client {
    public search!: AbstractResource;

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

    loadResources(): void {
        this.search = new resources.Search(this);
    }

    getBasePath(): string {
        return `${this.apiOptions.baseUrl}/${this.apiOptions.apiVersion}`;
    }

    setDebug(flag: boolean): void {
        this.apiOptions.debug = flag;
    }
}
