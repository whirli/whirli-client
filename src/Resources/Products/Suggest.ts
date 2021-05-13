import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class Suggest extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/products/suggest';
        this.defaultAccess = 'guest';
    }

    public all: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });
}
