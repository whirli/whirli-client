import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';
export default class ReturnOrderLines extends AbstractResource {
    initialise(): void;
    updateActiveReturn: (...args: HttpClientConfig) => HttpClientResponse;
}
