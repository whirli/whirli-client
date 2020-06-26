import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Checkout extends AbstractResource {
    initialise(): void;
    checkout: (...args: HttpClientConfig) => HttpClientResponse;
}
