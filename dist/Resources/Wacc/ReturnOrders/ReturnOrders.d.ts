import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';
export default class ReturnOrders extends AbstractResource {
    initialise(): void;
    all: (...args: HttpClientConfig) => HttpClientResponse;
    get: (...args: HttpClientConfig) => HttpClientResponse;
    create: (...args: HttpClientConfig) => HttpClientResponse;
    complete: (...args: HttpClientConfig) => HttpClientResponse;
}
