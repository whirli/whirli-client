import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class OrderLines extends AbstractResource {
    initialise(): void;
    create: Function;
    update: (orderLineId: string, ...args: HttpClientConfig) => HttpClientResponse;
    delete: (orderLineId: string, ...args: HttpClientConfig) => HttpClientResponse;
}
