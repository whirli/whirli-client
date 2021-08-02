import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';
export default class Stock extends AbstractResource {
    initialise(): void;
    update: (...args: HttpClientConfig) => HttpClientResponse;
    reassign: (...args: HttpClientConfig) => HttpClientResponse;
    transitionInWarehouse: (...args: HttpClientConfig) => HttpClientResponse;
}
