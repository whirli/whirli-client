import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class AttributionSource extends AbstractResource {
    initialise(): void;
    create: (...args: HttpClientConfig) => HttpClientResponse;
}
