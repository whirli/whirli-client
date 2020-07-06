import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class ProductLists extends AbstractResource {
    initialise(): void;
    get: (sharingSlug: string, ...args: HttpClientConfig) => HttpClientResponse;
}
