import AbstractResource from '../AbstractResource';
import { HttpClientConfig } from '../../Interfaces/HttpClient';
export default class Products extends AbstractResource {
    initialise(): void;
    all: (...args: HttpClientConfig) => any;
    get: (slug: string, ...args: HttpClientConfig) => any;
}
