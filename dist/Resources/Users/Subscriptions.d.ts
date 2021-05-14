import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Subscriptions extends AbstractResource {
    initialise(): void;
    create: (...args: HttpClientConfig) => HttpClientResponse;
    update: (...args: HttpClientConfig) => HttpClientResponse;
    pay: (...args: HttpClientConfig) => HttpClientResponse;
    previewChange: (subscriptionId: string, ...args: HttpClientConfig) => HttpClientResponse;
    change: (subscriptionId: string, ...args: HttpClientConfig) => HttpClientResponse;
    cancel: (subscriptionId: string, ...args: HttpClientConfig) => HttpClientResponse;
}
