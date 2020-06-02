import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Products extends AbstractResource {
    initialise(): void;
    get: (productAssociationSlug: string, ...args: HttpClientConfig) => HttpClientResponse;
    getByType: (productAssociationTypeSlug: string, ...args: HttpClientConfig) => HttpClientResponse;
}
