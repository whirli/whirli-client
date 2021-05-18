import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
import { GetRequest } from './CodesRequestInterfaces';
export default class Codes extends AbstractResource {
    initialise(): void;
    get: ({ code }: GetRequest, ...args: HttpClientConfig) => HttpClientResponse;
}
