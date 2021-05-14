import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';
export default class Products extends AbstractResource {
    initialise(): void;
    all: (...args: HttpClientConfig) => HttpClientResponse;
    create: (...args: HttpClientConfig) => HttpClientResponse;
    get: (...args: HttpClientConfig) => HttpClientResponse;
    update: (...args: HttpClientConfig) => HttpClientResponse;
    delete: (...args: HttpClientConfig) => HttpClientResponse;
    updateRelations: (...args: HttpClientConfig) => HttpClientResponse;
    waitSpots: (...args: HttpClientConfig) => HttpClientResponse;
    waitSpotsForProduct: (...args: HttpClientConfig) => HttpClientResponse;
}
