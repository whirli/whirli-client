/** Encapsulates request logic for a Warehouse Resource */
export default class AbstractResource {
    constructor(api, httpClient) {
        this.api = api;
        this.client = httpClient;
        this.initialise();
    }

    initialise() {
        this.resourcePath = '';
    }
}
