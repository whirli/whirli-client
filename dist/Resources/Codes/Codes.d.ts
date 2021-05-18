import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Codes extends AbstractResource {
    initialise(): void;
    get: (code: string, ...args: HttpClientConfig) => HttpClientResponse;
}
