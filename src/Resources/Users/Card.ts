import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class Details extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/card';
        this.defaultAccess = 'member';
    }

    public update: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/',
    });

    public get: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });
}
