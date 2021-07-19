import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Auth extends AbstractResource {
    initialise(): void;
    login: (...args: HttpClientConfig) => HttpClientResponse;
    logout: (...args: HttpClientConfig) => HttpClientResponse;
    user: (...args: HttpClientConfig) => HttpClientResponse;
}
