import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Orders extends AbstractResource {
    initialise(): void;
    create: (orderLineId: string, ...args: HttpClientConfig) => HttpClientResponse;
    updateLine: (orderLineId: string, ...args: HttpClientConfig) => HttpClientResponse;
    deleteLine: (orderLineId: string, ...args: HttpClientConfig) => HttpClientResponse;
}
