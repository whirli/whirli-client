import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Reviews extends AbstractResource {
    initialise(): void;
    all: (...args: HttpClientConfig) => HttpClientResponse;
}
