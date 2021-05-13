import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Addresses extends AbstractResource {
    initialise(): void;
    create: (...args: HttpClientConfig) => HttpClientResponse;
    update: (...args: HttpClientConfig) => HttpClientResponse;
    delete: (...args: HttpClientConfig) => HttpClientResponse;
    default: (...args: HttpClientConfig) => HttpClientResponse;
}
