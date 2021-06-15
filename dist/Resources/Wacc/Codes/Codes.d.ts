import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';
export default class Codes extends AbstractResource {
    initialise(): void;
    all: (...args: HttpClientConfig) => HttpClientResponse;
    show: (...args: HttpClientConfig) => HttpClientResponse;
    update: (...args: HttpClientConfig) => HttpClientResponse;
    store: (...args: HttpClientConfig) => HttpClientResponse;
}
