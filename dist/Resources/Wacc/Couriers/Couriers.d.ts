import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';
export default class Orders extends AbstractResource {
    initialise(): void;
    createShipment: (...args: HttpClientConfig) => HttpClientResponse;
    printOrder: (...args: HttpClientConfig) => HttpClientResponse;
}
