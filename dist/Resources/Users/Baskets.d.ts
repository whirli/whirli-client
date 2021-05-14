import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Baskets extends AbstractResource {
    initialise(): void;
    getActive: (...args: HttpClientConfig) => HttpClientResponse;
    addLine: (...args: HttpClientConfig) => HttpClientResponse;
    updateLine: (...args: HttpClientConfig) => HttpClientResponse;
    removeLine: (...args: HttpClientConfig) => HttpClientResponse;
}
