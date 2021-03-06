import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Referral extends AbstractResource {
    initialise(): void;
    get: (...args: HttpClientConfig) => HttpClientResponse;
}
