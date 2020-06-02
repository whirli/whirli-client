import Client from '../../Client';
import AbstractResource from '../AbstractResource';
import Associations from './Associations';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Products extends AbstractResource {
    associations: Associations;
    constructor(api: Client);
    initialise(): void;
    all: (...args: HttpClientConfig) => HttpClientResponse;
    get: (slug: string, ...args: HttpClientConfig) => HttpClientResponse;
}
