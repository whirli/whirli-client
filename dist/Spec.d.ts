import PartialSpec from './Interfaces/PartialSpec';
import UrlData from './Interfaces/UrlData';
export default class Spec {
    protected readonly path: string;
    protected readonly requestMethod: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'OPTIONS' | 'DELETE';
    protected readonly access: 'guest' | 'member' | 'wacc';
    protected readonly urlParams: Array<string>;
    constructor(resourcePath: string, partialSpec: PartialSpec);
    pathSymbolCount(): number;
    mapValuesToPathSymbols(values: Array<string>): UrlData;
    replacePathSymbolsWithUrlData(urlData: UrlData): string;
    getMethod(): string;
}
