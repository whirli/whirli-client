import PartialSpec from './Interfaces/PartialSpec';
import UrlData from './Interfaces/UrlData';
import { extractUrlParams } from './utils';

export default class Spec {
    protected readonly path: string;
    protected readonly requestMethod: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'OPTIONS' | 'DELETE';
    protected readonly urlParams: Array<string>;

    /**
     * Create a complete spec from a partial spec.
     */
    constructor(resourcePath: string, partialSpec: PartialSpec) {
        this.path = `/${resourcePath}${partialSpec.path}`;
        this.requestMethod = partialSpec.method || 'GET';
        this.urlParams = extractUrlParams(this.path);
    }

    /**
     * Map values to the urlParams defined in this spec, sequentially.
     *
     * E.G. If the spec path was /{id}/{name} then the urlParams would be ['id', 'name'].
     * Therefore, if values = ['10', 'tester'], we will return the mapping { id: '10', name: 'tester' }.
     *
     * @throws Error When any value passed in is not a string.
     */
    mapValuesToPathSymbols(values: Array<string>): UrlData {
        return this.urlParams.reduce((urlData: UrlData, param: string) => {
            const value: string | undefined = values.shift();

            if (typeof value !== 'string') {
                throw new Error(
                    `Whirli Spec Error: Argument "${param}" must be a string, but got: ${value} (on API request to \`${this.requestMethod} ${this.path}\`)`,
                );
            }

            urlData[param] = value;
            return urlData;
        }, {});
    }

    /**
     * Using an object of URL data (e.g. { id: '10' } ), return a full URL
     * for the resource request, e.g. /resource/{id} becomes /resource/10.
     */
    replacePathSymbolsWithUrlData(urlData: UrlData): string {
        return this.path.replace(/{([\s\S]+?)}/g, ($0: string, $1: string) => encodeURIComponent(urlData[$1] || ''));
    }
}
