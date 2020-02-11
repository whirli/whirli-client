import Spec from '../Spec';
import Client from '../Client';
import PartialSpec from '../Interfaces/PartialSpec';
import UrlData from '../Interfaces/UrlData';
import HttpClient from '../Interfaces/HttpClient';

export default class AbstractResource {
    protected api: Client;
    protected resourcePath = '';

    constructor(api: Client) {
        this.api = api;
        this.initialise();
    }

    initialise(): void {
        this.resourcePath = '';
    }

    /**
     * Creates an API resource function from a spec object.
     * Call the returned function to make an API call.
     *
     * @param partialSpec
     * @returns {Function}
     */
    createMethodFromPartialSpec(partialSpec: PartialSpec): Function {
        const api = this.api;
        const spec = new Spec(this.resourcePath, partialSpec);

        return function makeResourceRequest(...args: Array<string | object | Function>): void {
            const requestValues: Array<string> = args.slice(0, spec.pathSymbolCount()) as Array<string>;

            const urlData: UrlData = spec.mapValuesToPathSymbols(requestValues);
            const path: string = spec.replacePathSymbolsWithUrlData(urlData);

            const requestBody: object = typeof args[args.length - 1] === 'object' ? (args.pop() as object) : {};

            const httpClient: HttpClient = api.getHttpClient();

            return httpClient[`$${spec.getMethod().toLowerCase()}`](path, requestBody);

            // @todo Maybe we can handle something to do with pagination here, if it's a paginated resource
        };
    }
}
