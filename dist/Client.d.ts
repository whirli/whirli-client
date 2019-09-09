import ApiOptions from './Interfaces/ApiOptions';
import HttpClient from './Interfaces/HttpClient';
import AbstractResource from './Resources/AbstractResource';
export default class Client {
    search: AbstractResource;
    protected apiOptions: ApiOptions;
    protected httpClient: HttpClient;
    constructor(httpClient: HttpClient);
    loadResources(): void;
    getBasePath(): string;
    setDebug(flag: boolean): void;
}
