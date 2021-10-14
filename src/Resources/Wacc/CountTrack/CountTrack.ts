import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';

export default class WaitSpots extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/count-track';
        this.defaultAccess = 'wacc';
    }

    public get: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });
}
