import ApiOptions from './Interfaces/ApiOptions';
import HttpClient from './Interfaces/HttpClient';
import packageJson from '../package.json';
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
            version: packageJson.version,
        };
        this.httpClient = httpClient;
        this.loadResources();
    }

    loadResources() {
        this.search = new resources.Search(this);
    }

    getBasePath() {
        return `${this.apiOptions.baseUrl}/${this.apiOptions.apiVersion}`;
    }

    setDebug(flag: boolean) {
        this.apiOptions.debug = flag;
    }
}
