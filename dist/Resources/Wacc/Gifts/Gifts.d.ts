import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';
export default class Gifts extends AbstractResource {
    initialise(): void;
    all: (...args: HttpClientConfig) => HttpClientResponse;
    get: (...args: HttpClientConfig) => HttpClientResponse;
    create: (...args: HttpClientConfig) => HttpClientResponse;
    update: (...args: HttpClientConfig) => HttpClientResponse;
    delete: (...args: HttpClientConfig) => HttpClientResponse;
    print: (...args: HttpClientConfig) => HttpClientResponse;
    getForPicking: (...args: HttpClientConfig) => HttpClientResponse;
}
