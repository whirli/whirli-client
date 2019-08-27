import packageJson from '../package.json';
import resources from './Resources';

export default class Client {
    constructor(httpClient) {
        /** @private */
        this.apiOptions = {
            apiVersion: 'v1',
            baseUrl: '/api',
            debug: false,
            version: packageJson.version,
        };
        this.loadResources(httpClient);
    }

    loadResources(httpClient) {
        this.search = new resources.Search(this, httpClient);
    }

    getBasePath() {
        return `${this.apiOptions.baseUrl}/${this.apiOptions.apiVersion}`;
    }

    setDebug(flag) {
        this.apiOptions.debug = flag;
    }
}
