import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';
export default class ReturnOrderCollections extends AbstractResource {
    initialise(): void;
    update: (...args: HttpClientConfig) => HttpClientResponse;
}
