import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';
export default class Orders extends AbstractResource {
    initialise(): void;
    all: (...args: HttpClientConfig) => HttpClientResponse;
    get: (...args: HttpClientConfig) => HttpClientResponse;
    create: (...args: HttpClientConfig) => HttpClientResponse;
    update: (...args: HttpClientConfig) => HttpClientResponse;
    delete: (...args: HttpClientConfig) => HttpClientResponse;
    print: (...args: HttpClientConfig) => HttpClientResponse;
    getForPicking: (...args: HttpClientConfig) => HttpClientResponse;
    assignOrders: (...args: HttpClientConfig) => HttpClientResponse;
    getPriorityOrder: (...args: HttpClientConfig) => HttpClientResponse;
}
