import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';
export default class Transition extends AbstractResource {
    initialise(): void;
    inWarehouse: (...args: HttpClientConfig) => HttpClientResponse;
}
