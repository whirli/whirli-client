import PartialSpec from './Interfaces/PartialSpec';
import UrlData from './Interfaces/UrlData';
import { ResourceOptions } from './Interfaces/ResourceOptions';
import { HttpMethod } from './Interfaces/HttpMethod';
import { AccessType } from './Interfaces/AccessType';
import { extractUrlParams } from './utils';

export default class Spec {
    protected readonly path: string;
    protected readonly requestMethod: HttpMethod;
    protected readonly access: AccessType;
    protected readonly urlParams: Array<string>;

    /**
     * Create a complete spec from a partial spec.
     */
    constructor(resourceOptions: ResourceOptions, partialSpec: PartialSpec) {
        const { defaultAccess, resourcePath } = resourceOptions;

        this.access = partialSpec.access || defaultAccess;
        this.path = `${this.access}/${resourcePath}${partialSpec.path || '/'}`;
        this.requestMethod = partialSpec.method || 'GET';
        this.urlParams = extractUrlParams(this.path);
    }

    pathSymbolCount(): number {
        return this.urlParams.length;
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

    getMethod(): string {
        return this.requestMethod;
    }
}
