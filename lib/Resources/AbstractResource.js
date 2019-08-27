import Spec from '../Spec';

export default class AbstractResource {
    constructor(api, httpClient) {
        this.api = api;
        this.client = httpClient;
        this.initialise();
    }

    initialise() {
        this.resourcePath = '';
    }

    /**
     * Creates an API resource function from a spec object.
     * Call the returned function to make an API call.
     *
     * @param partialSpec
     * @returns {Function}
     */
    createMethodFromPartialSpec(partialSpec) {
        const spec = new Spec(this.resourcePath, partialSpec);

        return function makeResourceRequest(...args) {
            const callback = typeof args[args.length - 1] === 'function' && args.pop();
            const urlData = spec.mapValuesToPathSymbols(args);
            const path = spec.replacePathSymbolsWithUrlData(urlData);

            // @todo makeRequest()

            // @todo Run callback

            // @todo Maybe we can handle something to do with pagination here, if it's a paginated resource
        }
    }
}
