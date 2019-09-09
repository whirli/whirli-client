import Spec from '../Spec';
import Client from '../Client';
import PartialSpec from '../Interfaces/PartialSpec';
import UrlData from '../Interfaces/UrlData';

export default class AbstractResource {
    protected api: Client;
    protected resourcePath: string = '';

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
        const spec = new Spec(this.resourcePath, partialSpec);

        return function makeResourceRequest(...args: Array<string|Function>) {
            const callback: Function|false = typeof args[args.length - 1] === 'function' && args.pop() as Function;
            const urlData: UrlData = spec.mapValuesToPathSymbols(args as Array<string>);
            const path: string = spec.replacePathSymbolsWithUrlData(urlData);

            // @todo makeRequest()

            // @todo Run callback

            // @todo Maybe we can handle something to do with pagination here, if it's a paginated resource
        };
    }
}
