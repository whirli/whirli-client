import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class ChildProfiles extends AbstractResource {
    initialise(): void;
    create: (...args: HttpClientConfig) => HttpClientResponse;
    delete: (childProfileId: string, ...args: HttpClientConfig) => HttpClientResponse;
}
