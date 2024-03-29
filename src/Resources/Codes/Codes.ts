import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class Codes extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/codes';
        this.defaultAccess = 'guest';
    }

    public get: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{name}',
    });
}
