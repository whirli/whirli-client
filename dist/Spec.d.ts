import PartialSpec from './Interfaces/PartialSpec';
import UrlData from './Interfaces/UrlData';
import { ResourceOptions } from './Interfaces/ResourceOptions';
import { HttpMethod } from './Interfaces/HttpMethod';
import { AccessType } from './Interfaces/AccessType';
export default class Spec {
    protected readonly path: string;
    protected readonly requestMethod: HttpMethod;
    protected readonly access: AccessType;
    protected readonly urlParams: Array<string>;
    constructor(resourceOptions: ResourceOptions, partialSpec: PartialSpec);
    pathSymbolCount(): number;
    mapValuesToPathSymbols(values: Array<string>): UrlData;
    replacePathSymbolsWithUrlData(urlData: UrlData): string;
    getMethod(): string;
}
