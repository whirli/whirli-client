import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';

export default class Toybox extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/stock/toybox';
        this.defaultAccess = 'wacc';
    }

    public update: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/',
    });
}
