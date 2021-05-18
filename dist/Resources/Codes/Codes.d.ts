import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Codes extends AbstractResource {
    initialise(): void;
    show: (name: string, ...args: HttpClientConfig) => HttpClientResponse;
}
