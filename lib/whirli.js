import pJson from '../package.json';
import resources from './Resources';

export default class Client {
    constructor(httpClient) {
        this.base = '/api';
        this.version = pJson.version;
        this.apiVersion = 'v1';
        this.loadResources(httpClient);
    }

    loadResources(httpClient) {
        this.products = new resources.Products(this, httpClient);
        this.search = new resources.Search(this, httpClient);
    }

    basePath() {
        return `${this.base}/${this.apiVersion}`;
    }
}
