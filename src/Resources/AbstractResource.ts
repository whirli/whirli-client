import Spec from '../Spec';
import Client from '../Client';
import PartialSpec from '../Interfaces/PartialSpec';
import UrlData from '../Interfaces/UrlData';
import { ResourceOptions } from '../Interfaces/ResourceOptions';
import { AccessType } from '../Interfaces/AccessType';

type RequestArguments = Array<string | object | Function>;

export default class AbstractResource {
    protected api: Client;
    protected resourcePath = '';
    protected defaultAccess: AccessType = 'guest';

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
        const self = this;

        const resourceOptions: ResourceOptions = {
            resourcePath: this.resourcePath,
            defaultAccess: this.defaultAccess,
        };
        const spec = new Spec(resourceOptions, partialSpec);

        return function makeResourceRequest(...args: RequestArguments): void {
            const requestPath = self.getRequestPath(spec, args);
            const requestConfig: Array<object> = self.getRequestConfig(args);

            return api.getHttpClient()[`$${spec.getMethod().toLowerCase()}`](requestPath, ...requestConfig);

            // @todo Maybe we can handle something to do with pagination here, if it's a paginated resource
        };
    }

    getRequestPath(spec: Spec, requestArgs: RequestArguments): string {
        const requestValues: Array<string> = requestArgs.slice(0, spec.pathSymbolCount()) as Array<string>;

        const urlData: UrlData = spec.mapValuesToPathSymbols(requestValues);

        let path: string = spec.replacePathSymbolsWithUrlData(urlData);

        if (this.api.features().trimTrailingSlash) {
            path = path.replace(/\/+$/, '');
        }

        return path;
    }

    /**
     * Get the request config to give to axios to make a request.
     *
     * Axios request methods have one or two parameters for data and config. E.G.
     * axios.get(url[, config])
     * or
     * axios.post(url[, data[, config]])
     *
     * This method returns request config as an array of 0, 1 or 2 parameters, based on what was passed in.
     * @param requestArgs
     */
    getRequestConfig(requestArgs: RequestArguments): Array<object> {
        const lastArg = requestArgs.pop() as object;
        const penultimateArg = requestArgs.pop() as object;

        if (typeof lastArg !== 'object') return [];

        if (typeof penultimateArg !== 'object') return [lastArg];

        return [penultimateArg, lastArg];
    }
}
