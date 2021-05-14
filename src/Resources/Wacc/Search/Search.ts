import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';

export default class Search extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/search';
        this.defaultAccess = 'wacc';
    }

    public all: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });
}
