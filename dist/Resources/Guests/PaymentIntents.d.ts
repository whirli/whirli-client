import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class PaymentIntents extends AbstractResource {
    initialise(): void;
    succeeded: (...args: HttpClientConfig) => HttpClientResponse;
}
