import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';
export default class UserSubscriptions extends AbstractResource {
    initialise(): void;
    all: (...args: HttpClientConfig) => HttpClientResponse;
    get: (id: string, ...args: HttpClientConfig) => HttpClientResponse;
    update: (id: string, ...args: HttpClientConfig) => HttpClientResponse;
    suspend: (id: string, ...args: HttpClientConfig) => HttpClientResponse;
    cancel: (id: string, ...args: HttpClientConfig) => HttpClientResponse;
    activate: (id: string, ...args: HttpClientConfig) => HttpClientResponse;
    previewChange: (id: string, ...args: HttpClientConfig) => HttpClientResponse;
    change: (id: string, ...args: HttpClientConfig) => HttpClientResponse;
    upgradeTier: (id: string, ...args: HttpClientConfig) => HttpClientResponse;
}
