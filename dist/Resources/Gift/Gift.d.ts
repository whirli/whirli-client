import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Gift extends AbstractResource {
    initialise(): void;
    redeem: (...args: HttpClientConfig) => HttpClientResponse;
}
