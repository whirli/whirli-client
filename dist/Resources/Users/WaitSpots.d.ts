import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class WaitSpots extends AbstractResource {
    initialise(): void;
    all: (...args: HttpClientConfig) => HttpClientResponse;
    create: (...args: HttpClientConfig) => HttpClientResponse;
    delete: (waitSpotId: string, ...args: HttpClientConfig) => HttpClientResponse;
}
