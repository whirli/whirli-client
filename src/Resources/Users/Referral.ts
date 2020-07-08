import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class Referral extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'member';
    }

    public get: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/active-referral',
    });
}
