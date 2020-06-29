import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Subscriptions extends AbstractResource {
    initialise(): void;
    create: Function;
    update: Function;
    pay: Function;
    previewChange: (subscriptionId: string, ...args: HttpClientConfig) => HttpClientResponse;
    change: (subscriptionId: string, ...args: HttpClientConfig) => HttpClientResponse;
}
