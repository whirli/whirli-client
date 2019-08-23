import resources from './Resources';

export default class Client {
    constructor(httpClient) {
        this.base = '/ajax';
        this.version = 'v1';
        this.loadResources(httpClient);
    }

    loadResources(httpClient) {
        this.products = new resources.Products(this, httpClient);
        this.search = new resources.Search(this, httpClient);
    }

    basePath() {
        return `${this.base}`;
    }
}
